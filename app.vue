<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue';

// pet-kemon — "Playful Pack" link hub, bilingual TH/EN.
// Static page; text lives in I18N and is toggled via the top-right button.

type Lang = "en" | "th";

const [yt_sub, tt_sub, ig_sub, fb_sub, x_sub] = [132, 730,8, 107, 0]

const I18N: Record<Lang, Record<string, string>> = {
  en: {
    tagline: "catch 'em all — news, memes & fluff",
    shopeeLabel: "Shop my Shopee",
    shopeeSub: "Pamper your overlord & fund their loyal servant →",
    sale: "SALE",
    youtube: `${yt_sub} subscribers`,
    tiktok: `${tt_sub} followers`,
    instagram: `${ig_sub} followers`,
    facebook: `${fb_sub} likes`,
    x: `${x_sub} followers`,
    footer: "made with treats · pet-kemon 2026",
    toggle: "TH",
    toggleAria: "เปลี่ยนเป็นภาษาไทย",
  },
  th: {
    tagline: "catch 'em all — ข่าว มีม และความน่ารัก",
    shopeeLabel: "แผงลอย Shopee",
    shopeeSub: "บำเรอเจ้านายและสนับสนุนทาสได้ที่นี่ →",
    sale: "ลดราคา",
    youtube: `ผู้ติดตาม ${yt_sub}`,
    tiktok: `ผู้ติดตาม ${tt_sub}`,
    instagram: `ผู้ติดตาม ${ig_sub}`,
    facebook: `ถูกใจ ${fb_sub}`,
    x: `ผู้ติดตาม ${x_sub}`,
    footer: "made with treats · pet-kemon 2026",
    toggle: "EN",
    toggleAria: "Switch to English",
  },
};

const lang = ref<Lang>("en");
const tr = computed(() => I18N[lang.value]);

// Brand glyphs (official Simple Icons paths), white on colored tiles.
const I = {
  youtube:
    '<svg viewBox="0 0 24 24" width="26" height="26" fill="#fff"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  tiktok:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>',
  x:
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>',
  shopee:
    '<svg viewBox="0 0 24 24" width="30" height="30" fill="#fff"><path d="M15.9414 17.9633c.229-1.879-.981-3.077-4.1758-4.0969-1.548-.528-2.277-1.22-2.26-2.1719.065-1.056 1.048-1.825 2.352-1.85a5.2898 5.2898 0 0 1 2.8838.89c.116.072.197.06.263-.039.09-.145.315-.494.39-.62.051-.081.061-.187-.068-.281-.185-.1369-.704-.4149-.983-.5319a6.4697 6.4697 0 0 0-2.5118-.514c-1.909.008-3.4129 1.215-3.5389 2.826-.082 1.1629.494 2.1078 1.73 2.8278.262.152 1.6799.716 2.2438.892 1.774.552 2.695 1.5419 2.478 2.6969-.197 1.047-1.299 1.7239-2.818 1.7439-1.2039-.046-2.2878-.537-3.1278-1.19l-.141-.11c-.104-.08-.218-.075-.287.03-.05.077-.376.547-.458.67-.077.108-.035.168.045.234.35.293.817.613 1.134.775a6.7097 6.7097 0 0 0 2.8289.727 4.9048 4.9048 0 0 0 2.0759-.354c1.095-.465 1.8029-1.394 1.9449-2.554zM11.9986 1.4009c-2.068 0-3.7539 1.95-3.8329 4.3899h7.6657c-.08-2.44-1.765-4.3899-3.8328-4.3899zm7.8516 22.5981-.08.001-15.7843-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195L1.298 6.2858a.459.459 0 0 1 .45-.494h4.9748C6.8448 2.568 9.1607 0 11.9996 0c2.8388 0 5.1537 2.5689 5.2757 5.7898h4.9678a.459.459 0 0 1 .458.483l-.773 15.5883-.007.131c-.094 1.094-.979 1.9769-2.0709 2.0059z"/></svg>',
};

const links = [
  { key: "youtube", name: "YouTube", fill: "#FF0033", wide: true, icon: I.youtube, link: 'https://www.youtube.com/@pet-kemon' },
  { key: "tiktok", name: "TikTok", fill: "#1C1B22", icon: I.tiktok, link: 'https://www.tiktok.com/@pet.kemon' },
  { key: "instagram", name: "Instagram", fill: "#D6249F", icon: I.instagram, link: 'https://www.instagram.com/pet.kemon/' },
  { key: "facebook", name: "Facebook", fill: "#1877F2", icon: I.facebook, link: 'https://www.facebook.com/profile.php?id=61590497003963' },
  { key: "x", name: "X", fill: "#2B2A33", icon: I.x, link: 'https://x.com/pet_kemon' },
] as const;

function toggle() {
  lang.value = lang.value === "th" ? "en" : "th";
}

// Auto-detect browser language on the client (server renders EN to keep SSG stable).
onMounted(() => {
  const nav = (navigator.language || "en").toLowerCase();
  if (nav.indexOf("th") === 0) lang.value = "th";
});

watchEffect(() => {
  if (import.meta.client) document.documentElement.lang = lang.value;
});
</script>

<template>
  <div class="page">
    <button class="lang" type="button" :aria-label="tr.toggleAria" @click="toggle">
      {{ tr.toggle }}
    </button>

    <div class="wrap">
      <!-- header -->
      <header class="head">
        <div class="avatar" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="54" height="54" fill="#1C1B22">
            <ellipse cx="24" cy="30" rx="11" ry="8.5" />
            <circle cx="13" cy="20" r="4.2" />
            <circle cx="22" cy="15" r="4.2" />
            <circle cx="32" cy="16" r="4.2" />
            <circle cx="39" cy="23" r="3.6" />
          </svg>
        </div>
        <div class="handle">
          <span class="handle__name">pet-kemon</span>
          <svg class="handle__check" viewBox="0 0 24 24" width="24" height="24" role="img" aria-label="Verified">
            <path fill="#0FB390" d="M12 1l2.6 2.1 3.3-.4 1.2 3.1 3 1.5-1 3.2 1 3.2-3 1.5-1.2 3.1-3.3-.4L12 23l-2.6-2.1-3.3.4-1.2-3.1-3-1.5 1-3.2-1-3.2 3-1.5L6.1 2.7l3.3.4z" />
            <path fill="#fff" d="M10.6 15.3l-2.9-2.9 1.3-1.3 1.6 1.6 4-4 1.3 1.3z" />
          </svg>
        </div>
        <p class="bio">🐾 {{ tr.tagline }}</p>
      </header>

      <!-- featured shopee -->
      <a href="https://collshp.com/pet.kemon?view=storefront" class="card shopee">
        <span class="card__icon shopee__icon" v-html="I.shopee" />
        <span class="card__body">
          <span class="card__title shopee__title">{{ tr.shopeeLabel }}</span>
          <span class="card__sub">{{ tr.shopeeSub }}</span>
        </span>
        <span class="badge">{{ tr.sale }}</span>
      </a>

      <!-- tiles -->
      <div class="grid">
        <a
          v-for="l in links"
          :key="l.key"
          :href="l.link"
          class="card tile"
          :class="{ 'tile--wide': l.wide }"
          :style="{ background: l.fill }"
        >
          <span class="card__icon" v-html="l.icon" />
          <span class="tile__body">
            <span class="card__title">{{ l.name }}</span>
            <span class="card__sub">{{ tr[l.key] }}</span>
          </span>
          <span v-if="l.wide" class="tile__arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="spacer" />
      <footer class="foot">
        <svg viewBox="0 0 48 48" width="16" height="16" fill="currentColor" aria-hidden="true">
          <ellipse cx="24" cy="30" rx="11" ry="8.5" />
          <circle cx="13" cy="20" r="4.2" />
          <circle cx="22" cy="15" r="4.2" />
          <circle cx="32" cy="16" r="4.2" />
          <circle cx="39" cy="23" r="3.6" />
        </svg>
        <span>{{ tr.footer }}</span>
      </footer>
    </div>
  </div>
</template>

<style>
:root {
  --ink: #1c1b22;
  --cream: #fbf6ee;
  --teal: #0fb390;
  --sun: #ffc94d;
  --shopee: #ee4d2d;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; }

.page {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--ink);
  background-color: var(--cream);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%231c1b22' fill-opacity='0.05'%3E%3Cellipse cx='40' cy='46' rx='9' ry='7'/%3E%3Ccircle cx='28' cy='34' r='3.5'/%3E%3Ccircle cx='40' cy='30' r='3.5'/%3E%3Ccircle cx='52' cy='34' r='3.5'/%3E%3Ccircle cx='58' cy='44' r='3'/%3E%3C/g%3E%3C/svg%3E");
  font-family: "Plus Jakarta Sans", system-ui, sans-serif;
}

.wrap {
  width: 100%;
  max-width: 460px;
  padding: 40px 22px 32px;
  display: flex;
  flex-direction: column;
}

/* language toggle */
.lang {
  position: fixed;
  top: 18px;
  right: 18px;
  z-index: 50;
  min-width: 46px;
  cursor: pointer;
  font-family: "Fredoka", sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: var(--ink);
  background: var(--sun);
  border: 2.5px solid var(--ink);
  border-radius: 999px;
  padding: 8px 14px;
  box-shadow: 3px 3px 0 var(--ink);
  transition: transform 0.1s, box-shadow 0.1s;
}
.lang:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--ink); }

/* header */
.head { display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 22px; }
.avatar {
  width: 96px; height: 96px; border-radius: 30px;
  background: var(--sun); border: 3px solid var(--ink);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 5px 5px 0 var(--ink); transform: rotate(-4deg);
}
.handle { display: flex; align-items: center; gap: 8px; margin-top: 20px; }
.handle__name { font-family: "Fredoka", sans-serif; font-size: 36px; font-weight: 600; letter-spacing: -0.5px; white-space: nowrap; }
.handle__check { flex: none; }
.bio {
  margin-top: 10px; background: #fff; border: 2.5px solid var(--ink);
  border-radius: 999px; padding: 7px 17px; box-shadow: 3px 3px 0 var(--ink);
  font-size: 14.5px; font-weight: 700;
}

/* cards (shared) */
.card {
  text-decoration: none; color: #fff;
  border-radius: 20px; border: 3px solid var(--ink);
  box-shadow: 5px 5px 0 var(--ink);
  transition: transform 0.1s, box-shadow 0.1s;
}
.card:active { transform: translate(3px, 3px); box-shadow: 2px 2px 0 var(--ink); }
.card__icon {
  flex: none; display: flex; align-items: center; justify-content: center;
  background: rgba(255, 255, 255, 0.22); border: 2px solid rgba(255, 255, 255, 0.35);
}
.card__body { flex: 1; min-width: 0; }
.card__title { display: block; font-family: "Fredoka", sans-serif; font-weight: 600; font-size: 20px; line-height: 1; }
.card__sub { display: block; font-size: 13px; font-weight: 600; opacity: 0.88; margin-top: 4px; }

/* shopee */
.shopee {
  display: flex; align-items: center; gap: 14px;
  background: var(--shopee); padding: 15px 17px; margin-bottom: 14px;
}
.shopee__icon { width: 50px; height: 50px; border-radius: 15px; }
.shopee__title { font-size: 22px; }
.shopee .card__sub { font-weight: 700; opacity: 0.9; }
.badge {
  flex: none; background: var(--sun); color: var(--ink);
  font-family: "Fredoka", sans-serif; font-weight: 600; font-size: 12.5px;
  padding: 6px 11px; border-radius: 999px; border: 2px solid var(--ink);
  transform: rotate(6deg);
}

/* tiles grid */
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }
.tile {
  display: flex; flex-direction: column; align-items: flex-start;
  justify-content: space-between; padding: 15px 16px; min-height: 112px;
}
.tile .card__icon { width: 44px; height: 44px; border-radius: 13px; }
.tile__body { margin-top: 11px; }
.tile--wide {
  grid-column: 1 / -1; flex-direction: row; align-items: center;
  gap: 14px; justify-content: flex-start; min-height: 0; padding: 16px 18px;
}
.tile--wide .tile__body { margin-top: 0; flex: 1; }
.tile__arrow { flex: none; font-size: 21px; opacity: 0.9; }

.spacer { flex: 1; min-height: 24px; }
.foot {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  padding-top: 22px; color: rgba(28, 27, 34, 0.5);
  font-size: 13px; font-weight: 700;
}
</style>
