// petkemon-app.jsx — standalone "Playful Pack" link hub + Tweaks.
// Bilingual (TH/EN): copy lives in I18N, toggled via the top-right button,
// initial language auto-detected from the browser. Text ported from the
// original static design (incl. the custom Shopee subtitle + Thai strings).

const I18N = {
  en: {
    tagline: "catch 'em all — news, memes & fluff",
    shopeeLabel: "Shop my Shopee",
    shopeeSub: "Pamper your overlord & fund their loyal servant →",
    sale: "SALE",
    youtube: "1.2M subscribers",
    tiktok: "3.4M followers",
    instagram: "870K followers",
    facebook: "248K likes",
    x: "96K followers",
    footer: "made with treats · pet-kemon 2026",
    toggle: "TH",
    toggleAria: "เปลี่ยนเป็นภาษาไทย",
  },
  th: {
    tagline: "catch 'em all — ข่าว มีม และความน่ารัก",
    shopeeLabel: "แผงลอย Shopee",
    shopeeSub: "บำเรอเจ้านายและสนับสนุนทาสได้ที่นี่ →",
    sale: "ลดราคา",
    youtube: "ผู้ติดตาม 1.2M",
    tiktok: "ผู้ติดตาม 3.4M",
    instagram: "ผู้ติดตาม 870K",
    facebook: "ถูกใจ 248K",
    x: "ผู้ติดตาม 96K",
    footer: "ทำด้วยขนมสัตว์ · pet-kemon 2026",
    toggle: "EN",
    toggleAria: "Switch to English",
  },
};

function detectLang() {
  try {
    return (navigator.language || "en").toLowerCase().indexOf("th") === 0 ? "th" : "en";
  } catch (e) {
    return "en";
  }
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#FFC94D",
  "shadow": 5,
  "showCounts": true,
  "showSale": true
}/*EDITMODE-END*/;

function chunkyPress(setP) {
  return {
    onPointerDown: () => setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
  };
}

function Tile({ Icon, name, meta, fill, fg = '#fff', wide, shadow, showCounts }) {
  const [p, setP] = React.useState(false);
  const d = shadow;
  return (
    <a href="#" onClick={(e) => e.preventDefault()} {...chunkyPress(setP)}
      style={{
        gridColumn: wide ? '1 / -1' : 'auto', textDecoration: 'none',
        display: 'flex', flexDirection: wide ? 'row' : 'column', alignItems: wide ? 'center' : 'flex-start',
        gap: wide ? 14 : 0, justifyContent: wide ? 'flex-start' : 'space-between',
        background: fill, color: fg, borderRadius: 20, border: '3px solid #1C1B22',
        padding: wide ? '16px 18px' : '15px 16px', minHeight: wide ? 0 : 112,
        boxShadow: p ? `${Math.max(1, d - 3)}px ${Math.max(1, d - 3)}px 0 #1C1B22` : `${d}px ${d}px 0 #1C1B22`,
        transform: p ? 'translate(3px,3px)' : 'translate(0,0)', transition: 'transform .1s, box-shadow .1s',
      }}>
      <span style={{ width: 44, height: 44, flex: '0 0 44px', borderRadius: 13, background: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.35)' }}>
        <Icon size={26} />
      </span>
      <span style={{ flex: wide ? 1 : 'none', marginTop: wide ? 0 : 11 }}>
        <span style={{ display: 'block', fontFamily: '"Fredoka", sans-serif', fontWeight: 600, fontSize: 20, lineHeight: 1 }}>{name}</span>
        {showCounts && <span style={{ display: 'block', fontSize: 13, fontWeight: 600, opacity: 0.85, marginTop: 4 }}>{meta}</span>}
      </span>
      {wide && <span style={{ opacity: 0.9 }}><IconArrowUpRight size={21} /></span>}
    </a>
  );
}

function ShopeeButton({ label, sub, saleLabel, shadow, accent, showSale }) {
  const [p, setP] = React.useState(false);
  const d = shadow;
  return (
    <a href="#" onClick={(e) => e.preventDefault()} {...chunkyPress(setP)}
      style={{
        display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none',
        background: PK.shopee, color: '#fff', borderRadius: 20, border: '3px solid #1C1B22', padding: '15px 17px',
        boxShadow: p ? `${Math.max(1, d - 3)}px ${Math.max(1, d - 3)}px 0 #1C1B22` : `${d}px ${d}px 0 #1C1B22`,
        transform: p ? 'translate(3px,3px)' : 'translate(0,0)', transition: 'transform .1s, box-shadow .1s',
      }}>
      <span style={{ width: 50, height: 50, flex: '0 0 50px', borderRadius: 15, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.4)' }}>
        <IconShopee size={30} />
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'block', fontFamily: '"Fredoka", sans-serif', fontWeight: 600, fontSize: 22, lineHeight: 1 }}>{label}</span>
        <span style={{ display: 'block', fontSize: 13, fontWeight: 700, opacity: 0.9, marginTop: 4 }}>{sub}</span>
      </span>
      {showSale && <span style={{ background: accent, color: PK.ink, fontFamily: '"Fredoka", sans-serif', fontWeight: 600, fontSize: 12.5, padding: '6px 11px', borderRadius: 999, border: '2px solid #1C1B22', transform: 'rotate(6deg)' }}>{saleLabel}</span>}
    </a>
  );
}

function LangToggle({ label, ariaLabel, accent, onClick }) {
  const [p, setP] = React.useState(false);
  return (
    <button type="button" aria-label={ariaLabel} onClick={onClick} {...chunkyPress(setP)}
      style={{
        position: 'fixed', top: 18, right: 18, zIndex: 50, cursor: 'pointer',
        minWidth: 46, fontFamily: '"Fredoka", sans-serif', fontWeight: 600, fontSize: 15,
        color: PK.ink, background: accent, border: '2.5px solid #1C1B22', borderRadius: 999,
        padding: '8px 14px',
        boxShadow: p ? '1px 1px 0 #1C1B22' : '3px 3px 0 #1C1B22',
        transform: p ? 'translate(2px,2px)' : 'translate(0,0)', transition: 'transform .1s, box-shadow .1s',
      }}>
      {label}
    </button>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = React.useState(detectLang);
  const tr = I18N[lang];

  React.useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const paw = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="74" height="74"><g fill="rgba(28,27,34,0.05)"><ellipse cx="14" cy="22" rx="3" ry="4"/><ellipse cx="24" cy="22" rx="3" ry="4"/><ellipse cx="18" cy="14" rx="2.6" ry="3.4"/><ellipse cx="29" cy="15" rx="2.6" ry="3.4"/><path d="M21 27c-3.6 0-6.2 2.4-6.2 5 0 1.6 1.4 2.5 3 2.1 1.1-.3 2.2-.3 3.2 0 .4.1.8.1 1.2 0 1-.3 2.1-.3 3.2 0 1.6.4 3-.5 3-2.1 0-2.6-2.6-5-7.4-5z"/></g></svg>');

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: `${PK.cream} url("data:image/svg+xml,${paw}")`, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: PK.ink, display: 'flex', justifyContent: 'center' }}>
      <LangToggle label={tr.toggle} ariaLabel={tr.toggleAria} accent={t.accent} onClick={() => setLang(lang === 'th' ? 'en' : 'th')} />

      <div style={{ width: '100%', maxWidth: 460, padding: '40px 22px 32px', display: 'flex', flexDirection: 'column' }}>
        {/* header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 22 }}>
          <div style={{ width: 96, height: 96, borderRadius: 30, background: t.accent, border: '3px solid #1C1B22', display: 'flex', alignItems: 'center', justifyContent: 'center', color: PK.ink, boxShadow: `${t.shadow}px ${t.shadow}px 0 #1C1B22`, transform: 'rotate(-4deg)' }}>
            <IconPaw size={54} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 20 }}>
            <span style={{ fontFamily: '"Fredoka", sans-serif', fontSize: 36, fontWeight: 600, letterSpacing: -0.5, whiteSpace: 'nowrap' }}>pet-kemon</span>
            <span style={{ color: PK.teal, display: 'flex' }}><IconVerified size={24} /></span>
          </div>
          <div style={{ marginTop: 10, background: '#fff', border: '2.5px solid #1C1B22', borderRadius: 999, padding: '7px 17px', boxShadow: '3px 3px 0 #1C1B22' }}>
            <span style={{ fontSize: 14.5, fontWeight: 700 }}>🐾 {tr.tagline}</span>
          </div>
        </div>

        <div style={{ marginBottom: 14 }}>
          <ShopeeButton label={tr.shopeeLabel} sub={tr.shopeeSub} saleLabel={tr.sale} shadow={t.shadow} accent={t.accent} showSale={t.showSale} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }}>
          <Tile Icon={IconYouTube} name="YouTube" meta={tr.youtube} fill="#FF0033" wide shadow={t.shadow} showCounts={t.showCounts} />
          <Tile Icon={IconTikTok} name="TikTok" meta={tr.tiktok} fill={PK.ink} shadow={t.shadow} showCounts={t.showCounts} />
          <Tile Icon={IconInstagram} name="Instagram" meta={tr.instagram} fill="#D6249F" shadow={t.shadow} showCounts={t.showCounts} />
          <Tile Icon={IconFacebook} name="Facebook" meta={tr.facebook} fill="#1877F2" shadow={t.shadow} showCounts={t.showCounts} />
          <Tile Icon={IconX} name="X" meta={tr.x} fill="#2B2A33" shadow={t.shadow} showCounts={t.showCounts} />
        </div>

        <div style={{ flex: 1, minHeight: 24 }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, paddingTop: 22, color: 'rgba(28,27,34,0.5)' }}>
          <IconPaw size={16} />
          <span style={{ fontSize: 13, fontWeight: 700 }}>{tr.footer}</span>
        </div>
      </div>

      <TweaksPanel>
        <TweakSection label="Brand" />
        <TweakColor label="Accent" value={t.accent}
          options={['#FFC94D', '#FF6B35', '#0FB390', '#7A6CF0']}
          onChange={(v) => setTweak('accent', v)} />
        <TweakSection label="Style" />
        <TweakSlider label="Shadow depth" value={t.shadow} min={0} max={8} unit="px"
          onChange={(v) => setTweak('shadow', v)} />
        <TweakToggle label="Show follower counts" value={t.showCounts} onChange={(v) => setTweak('showCounts', v)} />
        <TweakToggle label="Shopee SALE badge" value={t.showSale} onChange={(v) => setTweak('showSale', v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
