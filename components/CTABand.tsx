export default function CTABand() {
  return (
    <div className="cta-band">
      <div>
        <div className="cta-band-eyebrow">Ready to eat?</div>
        <div className="cta-band-title">
          ORDER NOW.<br />
          <span>PICK UP IN 10.</span>
        </div>
      </div>
      <div className="cta-band-actions">
        <a href="#combos" className="btn-primary" style={{ fontSize: 20, padding: '18px 40px' }}>
          ORDER ONLINE →
        </a>
        <a href="#visit" className="cta-band-secondary">
          FIND US →
        </a>
      </div>
    </div>
  )
}
