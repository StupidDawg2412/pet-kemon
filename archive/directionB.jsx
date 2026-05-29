// directionB.jsx — "Playful Pack": chunky cartoony tiles, hard offset shadows.

function chunkyPress(setP) {
  return {
    onPointerDown: () => setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
  };
}

function PlayTile({ Icon, name, meta, fill, fg = '#fff', wide }) {
  const [p, setP] = React.useState(false);
  return (
    <a href="#" onClick={(e) => e.preventDefault()} {...chunkyPress(setP)}
      style={{
        gridColumn: wide ? '1 / -1' : 'auto', textDecoration: 'none',
        display: 'flex', flexDirection: wide ? 'row' : 'column', alignItems: wide ? 'center' : 'flex-start',
        gap: wide ? 14 : 0, justifyContent: wide ? 'flex-start' : 'space-between',
        background: fill, color: fg, borderRadius: 20, border: '3px solid #1C1B22',
        padding: wide ? '14px 18px' : '14px 15px', minHeight: wide ? 0 : 104,
        boxShadow: p ? '2px 2px 0 #1C1B22' : '5px 5px 0 #1C1B22',
        transform: p ? 'translate(3px,3px)' : 'translate(0,0)', transition: 'transform .1s, box-shadow .1s',
      }}>
      <span style={{ width: 42, height: 42, flex: '0 0 42px', borderRadius: 12, background: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.35)' }}>
        <Icon size={24} />
      </span>
      <span style={{ flex: wide ? 1 : 'none', marginTop: wide ? 0 : 10 }}>
        <span style={{ display: 'block', fontFamily: '"Fredoka", sans-serif', fontWeight: 600, fontSize: 19, lineHeight: 1 }}>{name}</span>
        <span style={{ display: 'block', fontSize: 12.5, fontWeight: 600, opacity: 0.85, marginTop: 3 }}>{meta}</span>
      </span>
      {wide && <span style={{ opacity: 0.9 }}><IconArrowUpRight size={20} /></span>}
    </a>
  );
}

function DirectionB() {
  // faint paw pattern
  const paw = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"><g fill="rgba(28,27,34,0.045)"><ellipse cx="14" cy="22" rx="3" ry="4"/><ellipse cx="24" cy="22" rx="3" ry="4"/><ellipse cx="18" cy="14" rx="2.6" ry="3.4"/><ellipse cx="29" cy="15" rx="2.6" ry="3.4"/><path d="M21 27c-3.6 0-6.2 2.4-6.2 5 0 1.6 1.4 2.5 3 2.1 1.1-.3 2.2-.3 3.2 0 .4.1.8.1 1.2 0 1-.3 2.1-.3 3.2 0 1.6.4 3-.5 3-2.1 0-2.6-2.6-5-7.4-5z"/></g></svg>');
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: `${PK.cream} url("data:image/svg+xml,${paw}")`, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: PK.ink }}>
      <StatusBar tint={PK.ink} />
      <div style={{ flex: 1, padding: '6px 20px 0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 16 }}>
          <div style={{ width: 84, height: 84, borderRadius: 26, background: PK.sun, border: '3px solid #1C1B22', display: 'flex', alignItems: 'center', justifyContent: 'center', color: PK.ink, boxShadow: '5px 5px 0 #1C1B22', transform: 'rotate(-4deg)' }}>
            <IconPaw size={46} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 16 }}>
            <span style={{ fontFamily: '"Fredoka", sans-serif', fontSize: 30, fontWeight: 600, letterSpacing: -0.5, whiteSpace: 'nowrap' }}>pet-kemon</span>
            <span style={{ color: PK.teal, display: 'flex' }}><IconVerified size={21} /></span>
          </div>
          <div style={{ marginTop: 8, background: '#fff', border: '2.5px solid #1C1B22', borderRadius: 999, padding: '6px 15px', boxShadow: '3px 3px 0 #1C1B22', maxWidth: 300 }}>
            <span style={{ fontSize: 13.5, fontWeight: 700 }}>🐾 catch ’em all — news, memes & fluff</span>
          </div>
        </div>

        {/* featured shopee */}
        <ShopeeChunky />

        {/* tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <PlayTile Icon={IconYouTube} name="YouTube" meta="1.2M subscribers" fill="#FF0033" wide />
          <PlayTile Icon={IconTikTok} name="TikTok" meta="3.4M followers" fill={PK.ink} />
          <PlayTile Icon={IconInstagram} name="Instagram" meta="870K followers" fill="#D6249F" />
          <PlayTile Icon={IconFacebook} name="Facebook" meta="248K likes" fill="#1877F2" />
          <PlayTile Icon={IconX} name="X" meta="96K followers" fill="#2B2A33" />
        </div>

        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '14px 0 10px', color: 'rgba(28,27,34,0.45)' }}>
          <IconPaw size={15} />
          <span style={{ fontSize: 12.5, fontWeight: 700 }}>made with treats · pet-kemon 2026</span>
        </div>
      </div>
      <HomeIndicator tint={PK.ink} />
    </div>
  );
}

function ShopeeChunky() {
  const [p, setP] = React.useState(false);
  return (
    <a href="#" onClick={(e) => e.preventDefault()} {...chunkyPress(setP)}
      style={{
        display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', marginBottom: 14,
        background: PK.shopee, color: '#fff', borderRadius: 20, border: '3px solid #1C1B22', padding: '14px 16px',
        boxShadow: p ? '2px 2px 0 #1C1B22' : '5px 5px 0 #1C1B22',
        transform: p ? 'translate(3px,3px)' : 'translate(0,0)', transition: 'transform .1s, box-shadow .1s',
      }}>
      <span style={{ width: 48, height: 48, flex: '0 0 48px', borderRadius: 14, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.4)' }}>
        <IconShopee size={28} />
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'block', fontFamily: '"Fredoka", sans-serif', fontWeight: 600, fontSize: 20, lineHeight: 1 }}>Shop my Shopee</span>
        <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, opacity: 0.9, marginTop: 4 }}>my fave pet gear & treats →</span>
      </span>
      <span style={{ background: PK.sun, color: PK.ink, fontFamily: '"Fredoka", sans-serif', fontWeight: 600, fontSize: 12, padding: '5px 10px', borderRadius: 999, border: '2px solid #1C1B22', transform: 'rotate(6deg)' }}>SALE</span>
    </a>
  );
}

window.DirectionB = DirectionB;
