// directionC.jsx — "Editorial Feed": content-forward masthead + story cards.

// Image placeholder: soft tinted block with faint paw + corner tag.
function Ph({ tint, tag, h, children, radius = 14 }) {
  return (
    <div style={{ position: 'relative', height: h, borderRadius: radius, overflow: 'hidden', background: tint, display: 'flex', alignItems: 'flex-end' }}>
      <div style={{ position: 'absolute', right: -10, top: -6, color: 'rgba(255,255,255,0.32)', transform: 'rotate(-12deg)' }}>
        <IconPaw size={h > 150 ? 120 : 64} />
      </div>
      {tag && (
        <span style={{ position: 'absolute', top: 10, left: 10, background: PK.ink, color: '#fff', fontSize: 10.5, fontWeight: 700, letterSpacing: 1, padding: '4px 9px', borderRadius: 6, fontFamily: '"Space Grotesk", sans-serif' }}>{tag}</span>
      )}
      {children}
    </div>
  );
}

function CSocial({ Icon, tint }) {
  const [p, setP] = React.useState(false);
  return (
    <a href="#" onClick={(e) => e.preventDefault()}
      onPointerDown={() => setP(true)} onPointerUp={() => setP(false)} onPointerLeave={() => setP(false)}
      style={{ width: 46, height: 46, borderRadius: 14, background: '#fff', border: '1px solid rgba(28,27,34,0.1)', color: tint, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', boxShadow: p ? 'none' : '0 2px 8px rgba(28,27,34,0.06)', transform: p ? 'scale(0.94)' : 'scale(1)', transition: 'transform .1s, box-shadow .1s' }}>
      <Icon size={22} />
    </a>
  );
}

function DirectionC() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#fff', fontFamily: '"Space Grotesk", system-ui, sans-serif', color: PK.ink }}>
      <StatusBar tint={PK.ink} />
      <div style={{ flex: 1, padding: '4px 20px 0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* masthead */}
        <div style={{ borderBottom: '2px solid #1C1B22', paddingBottom: 10, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ width: 30, height: 30, borderRadius: 9, background: PK.tangerine, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconPaw size={18} /></span>
              <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: -0.8, whiteSpace: 'nowrap' }}>PET-KEMON</span>
            </span>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(28,27,34,0.45)', textTransform: 'uppercase', letterSpacing: 0.6 }}>The Daily Fluff</span>
          </div>
        </div>

        {/* hero story */}
        <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: 'none', color: 'inherit', marginBottom: 16 }}>
          <Ph tint="#FF6B35" tag="TOP STORY" h={172} />
          <h2 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.4, margin: '12px 0 5px', textWrap: 'balance' }}>
            This rescue golden learned to “smile” for treats — the internet melted
          </h2>
          <span style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(28,27,34,0.5)' }}>NEWS · 4 min read · 2h ago</span>
        </a>

        {/* latest grid */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, whiteSpace: 'nowrap' }}>Latest drops</span>
          <span style={{ fontSize: 12.5, fontWeight: 600, color: PK.tangerine }}>See all →</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 18 }}>
          {[
            { tint: '#0FB390', tag: 'MEME', title: 'Cat reviews 7 cardboard boxes' },
            { tint: '#7A6CF0', tag: 'ARTICLE', title: '5 signs your dog is judging you' },
          ].map((c, i) => (
            <a key={i} href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Ph tint={c.tint} tag={c.tag} h={96} radius={12} />
              <p style={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.25, margin: '8px 0 0', textWrap: 'pretty' }}>{c.title}</p>
            </a>
          ))}
        </div>

        {/* shopee strip */}
        <a href="#" onClick={(e) => e.preventDefault()}
          style={{ display: 'flex', alignItems: 'center', gap: 13, textDecoration: 'none', background: PK.shopee, color: '#fff', borderRadius: 14, padding: '13px 15px', marginBottom: 18 }}>
          <span style={{ width: 40, height: 40, flex: '0 0 40px', borderRadius: 11, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconShopee size={24} /></span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: 'block', fontSize: 15.5, fontWeight: 700, letterSpacing: -0.2 }}>Shop our pet picks</span>
            <span style={{ display: 'block', fontSize: 12, fontWeight: 600, opacity: 0.85 }}>Curated on Shopee →</span>
          </span>
          <IconArrowUpRight size={19} />
        </a>

        <div style={{ flex: 1 }} />

        {/* follow row */}
        <div style={{ borderTop: '1px solid rgba(28,27,34,0.1)', paddingTop: 14 }}>
          <span style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(28,27,34,0.5)', marginBottom: 10 }}>Follow everywhere</span>
          <div style={{ display: 'flex', gap: 9, justifyContent: 'space-between' }}>
            <CSocial Icon={IconYouTube} tint="#FF0033" />
            <CSocial Icon={IconTikTok} tint={PK.ink} />
            <CSocial Icon={IconInstagram} tint="#D6249F" />
            <CSocial Icon={IconFacebook} tint="#1877F2" />
            <CSocial Icon={IconX} tint={PK.ink} />
          </div>
        </div>
        <div style={{ textAlign: 'center', fontSize: 11.5, fontWeight: 600, color: 'rgba(28,27,34,0.4)', padding: '12px 0 8px' }}>© 2026 pet-kemon</div>
      </div>
      <HomeIndicator tint={PK.ink} />
    </div>
  );
}

window.DirectionC = DirectionC;
