// shell.jsx — phone status bar + home indicator, shared theme tokens.

const PK = {
  ink: '#1C1B22',
  cream: '#FBF6EE',
  tangerine: '#FF6B35',
  teal: '#0FB390',
  sun: '#FFC94D',
  shopee: '#EE4D2D',
};
window.PK = PK;

// iOS-style status bar. `tint` = text/icon color, `bg` transparent by default.
function StatusBar({ tint = '#1C1B22' }) {
  return (
    <div style={{
      height: 44, flex: '0 0 44px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 22px 0 26px', color: tint,
      fontWeight: 600, fontSize: 15, letterSpacing: 0.2,
    }}>
      <span style={{ fontVariantNumeric: 'tabular-nums' }}>9:41</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {/* signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0.5" width="3" height="11.5" rx="1"/></svg>
        {/* wifi */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor"><path d="M8.5 2.2c2.7 0 5.2 1 7 2.8l-1.5 1.6A7.7 7.7 0 008.5 4.4 7.7 7.7 0 003 6.6L1.5 5C3.3 3.2 5.8 2.2 8.5 2.2zm0 3.6c1.7 0 3.3.7 4.5 1.8l-1.6 1.7a4.2 4.2 0 00-5.8 0L4 7.6a6.4 6.4 0 014.5-1.8zm0 3.5c.8 0 1.5.3 2 .9l-2 2.1-2-2.1c.5-.6 1.2-.9 2-.9z"/></svg>
        {/* battery */}
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="currentColor" opacity="0.4"/><rect x="2.5" y="2.5" width="17" height="7" rx="1.5" fill="currentColor"/><rect x="23" y="4" width="2" height="4" rx="1" fill="currentColor" opacity="0.5"/></svg>
      </div>
    </div>
  );
}

function HomeIndicator({ tint = '#1C1B22' }) {
  return (
    <div style={{ flex: '0 0 26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 134, height: 5, borderRadius: 3, background: tint, opacity: 0.35 }} />
    </div>
  );
}

Object.assign(window, { StatusBar, HomeIndicator });
