// directionA.jsx — "Clean Hub": minimal, refined stacked link list.

function ARow({ Icon, name, meta, tint }) {
  const [press, setPress] = React.useState(false);
  return (
    <a href="#" onClick={(e) => e.preventDefault()}
      onPointerDown={() => setPress(true)} onPointerUp={() => setPress(false)} onPointerLeave={() => setPress(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none',
        background: '#fff', borderRadius: 16, padding: '12px 14px',
        border: '1px solid rgba(28,27,34,0.08)',
        boxShadow: press ? '0 1px 2px rgba(28,27,34,0.06)' : '0 2px 10px rgba(28,27,34,0.05)',
        transform: press ? 'scale(0.985)' : 'scale(1)', transition: 'transform .12s, box-shadow .12s',
      }}>
      <span style={{ width: 44, height: 44, flex: '0 0 44px', borderRadius: 12, background: tint, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={24} />
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'block', fontSize: 16, fontWeight: 700, color: PK.ink, letterSpacing: -0.2 }}>{name}</span>
        <span style={{ display: 'block', fontSize: 13, color: 'rgba(28,27,34,0.5)', fontWeight: 500 }}>{meta}</span>
      </span>
      <span style={{ color: 'rgba(28,27,34,0.28)' }}><IconChevron size={18} /></span>
    </a>
  );
}

function DirectionA() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: PK.cream, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: PK.ink }}>
      <StatusBar tint={PK.ink} />
      <div style={{ flex: 1, padding: '8px 24px 0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 18 }}>
          <div style={{ width: 78, height: 78, borderRadius: 26, background: PK.tangerine, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 24px rgba(255,107,53,0.4)' }}>
            <IconPaw size={42} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 14 }}>
            <span style={{ fontSize: 25, fontWeight: 800, letterSpacing: -0.6 }}>pet-kemon</span>
            <span style={{ color: PK.tangerine, display: 'flex' }}><IconVerified size={20} /></span>
          </div>
          <span style={{ fontSize: 14, color: 'rgba(28,27,34,0.5)', fontWeight: 600, marginTop: 2 }}>@petkemon</span>
          <p style={{ fontSize: 14.5, lineHeight: 1.45, color: 'rgba(28,27,34,0.7)', margin: '10px 0 0', maxWidth: 280, textWrap: 'pretty' }}>
            Animal news, memes & the daily dose of fluff your feed deserves.
          </p>
        </div>

        {/* featured shopee */}
        <a href="#" onClick={(e) => e.preventDefault()}
          style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', background: PK.shopee, borderRadius: 18, padding: '14px 16px', marginBottom: 16, boxShadow: '0 10px 26px rgba(238,77,45,0.34)' }}>
          <span style={{ width: 46, height: 46, flex: '0 0 46px', borderRadius: 13, background: 'rgba(255,255,255,0.18)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconShopee size={26} />
          </span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: 'block', fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: -0.2 }}>Shop my Shopee storefront</span>
            <span style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.82)', fontWeight: 600 }}>Pet picks I actually use</span>
          </span>
          <span style={{ color: '#fff' }}><IconArrowUpRight size={20} /></span>
        </a>

        {/* social list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ARow Icon={IconYouTube} name="YouTube" meta="1.2M subscribers" tint="#FF0033" />
          <ARow Icon={IconTikTok} name="TikTok" meta="3.4M followers" tint={PK.ink} />
          <ARow Icon={IconInstagram} name="Instagram" meta="870K followers" tint="#D6249F" />
          <ARow Icon={IconFacebook} name="Facebook" meta="248K followers" tint="#1877F2" />
          <ARow Icon={IconX} name="X" meta="96K followers" tint={PK.ink} />
        </div>

        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '14px 0 10px', color: 'rgba(28,27,34,0.4)' }}>
          <IconPaw size={15} />
          <span style={{ fontSize: 12.5, fontWeight: 600 }}>© 2026 pet-kemon</span>
        </div>
      </div>
      <HomeIndicator tint={PK.ink} />
    </div>
  );
}

window.DirectionA = DirectionA;
