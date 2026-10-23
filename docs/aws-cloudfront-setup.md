# AWS setup: private S3 + CloudFront (one-time)

Site is static (`.output/public`). Bucket stays **private**; CloudFront reads it via
Origin Access Control (OAC) and is the only public entry point.

## 1. S3 bucket
- Create bucket, **Block all public access = ON**, no static website hosting.

## 2. CloudFront distribution
- Origin: the S3 bucket (REST endpoint, not website endpoint), Origin access = **OAC** (create new).
- Viewer protocol policy: **Redirect HTTP to HTTPS**.
- Default root object: `index.html`.
- Compress objects automatically: on. Cache policy: `CachingOptimized` (respects the
  `Cache-Control` headers set by the workflow).
- Custom error responses (private bucket returns 403 for missing keys):
  - 403 -> `/404.html`, response code 404
  - 404 -> `/404.html`, response code 404
- Custom domain (optional): add alternate domain name + ACM cert **issued in us-east-1**,
  then point DNS (Route 53 alias / CNAME) at the distribution.

## 3. Bucket policy (apply after distribution exists)
Replace `BUCKET`, `ACCOUNT_ID`, `DIST_ID`:
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "AllowCloudFrontRead",
    "Effect": "Allow",
    "Principal": { "Service": "cloudfront.amazonaws.com" },
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::BUCKET/*",
    "Condition": { "StringEquals": {
      "AWS:SourceArn": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DIST_ID" } }
  }]
}
```

## 4. GitHub OIDC deploy role
- IAM identity provider: `token.actions.githubusercontent.com`, audience `sts.amazonaws.com`.
- Role trust policy (replace `ACCOUNT_ID`, `OWNER/REPO`):
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": { "Federated": "arn:aws:iam::ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com" },
    "Action": "sts:AssumeRoleWithWebIdentity",
    "Condition": {
      "StringEquals": { "token.actions.githubusercontent.com:aud": "sts.amazonaws.com" },
      "StringLike":   { "token.actions.githubusercontent.com:sub": "repo:OWNER/REPO:ref:refs/heads/main" }
    }
  }]
}
```
- Role permissions:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    { "Effect": "Allow", "Action": ["s3:ListBucket"], "Resource": "arn:aws:s3:::BUCKET" },
    { "Effect": "Allow", "Action": ["s3:PutObject", "s3:DeleteObject"], "Resource": "arn:aws:s3:::BUCKET/*" },
    { "Effect": "Allow", "Action": "cloudfront:CreateInvalidation",
      "Resource": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DIST_ID" }
  ]
}
```

## 5. GitHub repo settings
- Secret: `AWS_ROLE_ARN`
- Variables: `AWS_REGION`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`

## Cache behaviour (set by `deploy.yml`)
- `_nuxt/*` (content-hashed): `max-age=31536000, immutable`
- everything else incl. `index.html`, `_payload.json`, `_nuxt/builds/latest.json`:
  `max-age=0, must-revalidate`, plus `/*` invalidation each deploy.
