// app.jsx — assembles the three directions onto the design canvas.

function App() {
  return (
    <DesignCanvas>
      <DCSection id="hub" title="pet-kemon · link hub" subtitle="One mobile landing page, three directions · tap-state buttons live">
        <DCArtboard id="A" label="A · Clean Hub" width={390} height={844}>
          <DirectionA />
        </DCArtboard>
        <DCArtboard id="B" label="B · Playful Pack" width={390} height={828}>
          <DirectionB />
        </DCArtboard>
        <DCArtboard id="C" label="C · Editorial Feed" width={390} height={840}>
          <DirectionC />
        </DCArtboard>
        <DCPostIt top={8} left={-232} width={196} rotate={-3}>
          Phone-first hub for FB · YT · TikTok · X · IG + a featured Shopee storefront. Placeholders throughout — swap in real handles, follower counts & photos.
        </DCPostIt>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
