// icons.jsx — shared SVG glyphs for pet-kemon link hub.
// Simplified monochrome platform marks (use currentColor) + utility icons.
// All take {size, ...rest}; color comes from CSS `color`.

const Svg = ({ size = 24, viewBox = '0 0 24 24', children, ...rest }) => (
  <svg width={size} height={size} viewBox={viewBox} fill="currentColor"
    xmlns="http://www.w3.org/2000/svg" {...rest}>{children}</svg>
);

const IconFacebook = (p) => (
  <Svg {...p}><path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6C16.6 2.5 15.6 2.4 14.5 2.4c-2.4 0-4 1.4-4 4.1v2H7.5v3.2h3v8.3h3.5v-8.3h2.7l.4-3.2H14z"/></Svg>
);

const IconYouTube = (p) => (
  <Svg {...p} viewBox="0 0 24 24"><path d="M23.5 7.3c-.3-1-1-1.8-2-2.1C19.7 4.7 12 4.7 12 4.7s-7.7 0-9.5.5c-1 .3-1.8 1.1-2 2.1C0 9.1 0 12 0 12s0 2.9.5 4.7c.3 1 1 1.8 2 2.1 1.8.5 9.5.5 9.5.5s7.7 0 9.5-.5c1-.3 1.8-1.1 2-2.1.5-1.8.5-4.7.5-4.7s0-2.9-.5-4.7zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z"/></Svg>
);

const IconTikTok = (p) => (
  <Svg {...p}><path d="M16.6 2h-3.1v13.1c0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9.3 0 .6 0 .9.1v-3.2c-.3 0-.6-.1-.9-.1C7.4 9.1 4.6 11.9 4.6 15.1S7.4 21.1 10.6 21.1s6-2.8 6-6V8.5c1.2.9 2.7 1.4 4.3 1.4V6.8c-2.4 0-4.3-1.9-4.3-4.3V2z"/></Svg>
);

const IconX = (p) => (
  <Svg {...p}><path d="M17.5 3h2.9l-6.4 7.3 7.5 9.9h-5.9l-4.6-6-5.3 6H2.8l6.8-7.8L2.4 3h6l4.2 5.5L17.5 3zm-1 15.4h1.6L7.6 4.6H5.9l10.6 13.8z"/></Svg>
);

const IconInstagram = (p) => (
  <Svg {...p}><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c0-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zM12 0C8.7 0 8.3 0 7 .1 5.7.1 4.8.4 4.1.6c-.8.3-1.4.7-2.1 1.4C1.3 2.7.9 3.3.6 4.1.4 4.8.1 5.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c0 1.3.3 2.2.5 2.9.3.8.7 1.4 1.4 2.1.7.7 1.3 1.1 2.1 1.4.7.2 1.6.5 2.9.5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3 0 2.2-.3 2.9-.5.8-.3 1.4-.7 2.1-1.4.7-.7 1.1-1.3 1.4-2.1.2-.7.5-1.6.5-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c0-1.3-.3-2.2-.5-2.9-.3-.8-.7-1.4-1.4-2.1C20.3 1.3 19.7.9 18.9.6 18.2.4 17.3.1 16 .1 14.7 0 14.3 0 11 0h1zm0 5.8a6.2 6.2 0 100 12.4A6.2 6.2 0 0012 5.8zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.4a1.4 1.4 0 11-2.9 0 1.4 1.4 0 012.9 0z"/></Svg>
);

// Shopee — shopping bag mark
const IconShopee = (p) => (
  <Svg {...p}><path d="M12 2.2c-2.3 0-4.1 1.9-4.1 4.1v.4H4.6c-.6 0-1.1.5-1.2 1.1L2.2 19.7c-.1 1.2.9 2.1 2 2.1h15.6c1.1 0 2.1-.9 2-2.1L20.6 7.8c-.1-.6-.6-1.1-1.2-1.1h-3.3v-.4c0-2.2-1.8-4.1-4.1-4.1zm0 1.8c1.3 0 2.3 1 2.3 2.3v.4H9.7v-.4c0-1.3 1-2.3 2.3-2.3zm-1.5 7.1c.6-.5 1.4-.7 2.3-.7 1 0 1.9.3 2.5.8l-.8 1.2c-.4-.3-1-.6-1.7-.6-.6 0-1.1.2-1.1.7 0 .5.5.7 1.5 1 1.3.4 2.4.9 2.4 2.3 0 1.5-1.3 2.4-3 2.4-1.1 0-2.2-.4-2.9-1l.9-1.2c.5.4 1.3.8 2 .8.7 0 1.2-.3 1.2-.8 0-.5-.5-.7-1.6-1.1-1.2-.4-2.2-.9-2.2-2.2 0-.7.2-1.3.5-1.6z"/></Svg>
);

const IconPaw = (p) => (
  <Svg {...p}><ellipse cx="6.5" cy="9.5" rx="2.1" ry="2.7"/><ellipse cx="17.5" cy="9.5" rx="2.1" ry="2.7"/><ellipse cx="10" cy="5.6" rx="1.9" ry="2.4"/><ellipse cx="14" cy="5.6" rx="1.9" ry="2.4"/><path d="M12 11.5c-2.6 0-4.8 1.7-5.6 3.9-.6 1.7.6 3.4 2.4 3.4.9 0 1.7-.3 2.4-.6.5-.2.9-.2 1.4 0 .7.3 1.5.6 2.4.6 1.8 0 3-1.7 2.4-3.4-.8-2.2-3-3.9-5.4-3.9z"/></Svg>
);

const IconChevron = (p) => (
  <Svg {...p} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></Svg>
);

const IconArrowUpRight = (p) => (
  <Svg {...p} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9"/></Svg>
);

const IconBolt = (p) => (
  <Svg {...p}><path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5z"/></Svg>
);

const IconVerified = (p) => (
  <Svg {...p}><path d="M12 1.5l2.3 1.7 2.8-.4 1.2 2.6 2.6 1.2-.4 2.8L22 12l-1.7 2.3.4 2.8-2.6 1.2-1.2 2.6-2.8-.4L12 22.5l-2.3-1.7-2.8.4-1.2-2.6-2.6-1.2.4-2.8L2 12l1.7-2.3-.4-2.8 2.6-1.2 1.2-2.6 2.8.4L12 1.5z"/><path d="M10.6 14.6l-2.3-2.3-1.3 1.3 3.6 3.6 6-6-1.3-1.3-4.7 4.7z" fill="#fff"/></Svg>
);

const IconNews = (p) => (
  <Svg {...p} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="M7 9h6M7 12.5h6M7 16h4"/><rect x="15.5" y="9" width="2.5" height="3.5"/></Svg>
);

const IconShare = (p) => (
  <Svg {...p} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2.4"/><circle cx="17.5" cy="5.5" r="2.4"/><circle cx="17.5" cy="18.5" r="2.4"/><path d="M8.2 10.8l7-4.2M8.2 13.2l7 4"/></Svg>
);

const IconPlay = (p) => (
  <Svg {...p}><path d="M8 5v14l11-7L8 5z"/></Svg>
);

Object.assign(window, {
  IconFacebook, IconYouTube, IconTikTok, IconX, IconInstagram, IconShopee,
  IconPaw, IconChevron, IconArrowUpRight, IconBolt, IconVerified, IconNews,
  IconShare, IconPlay,
});
