'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot" />
          Now Taking Orders
        </div>
        <h1 className="hero-title">
          CHICKEN<br />
          <span className="yellow">&amp;</span><br />
          <span className="red">WAFFLES</span>
        </h1>
        <p className="hero-sub">Crispy. Stacked. No Apologies.</p>
        <div className="hero-cta-group">
          <a href="#combos" className="btn-primary">ORDER NOW →</a>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Full Menu
          </button>
        </div>
      </div>

      {/* Mobile-only image — no animations, no floaters, plain */}
      <div className="hero-mobile-img">
        <Image
          src="https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev/clucknwaffle.webp"
          alt="Chicken and Waffles"
          width={400}
          height={400}
          priority
          fetchPriority="high"
          sizes="45vw"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* Desktop-only image — full animated version */}
      <div className="hero-right">
        <div className="hero-glow-spill" />
        <div className="hero-floater drip">🍯</div>
        <div className="hero-floater star">✦</div>
        <div className="hero-floater crumb1" />
        <div className="hero-floater crumb2" />
        <div className="hero-floater crumb3" />
        <Image
          className="hero-plate"
          src="https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev/clucknwaffle.webp"
          alt="Chicken and Waffles"
          width={750}
          height={750}
          priority
          fetchPriority="high"
          sizes="50vw"
        />
        <div className="steam">
          <div className="steam-wisp" />
          <div className="steam-wisp" />
          <div className="steam-wisp" />
          <div className="steam-wisp" />
        </div>
        <div className="hero-floater fries">🍟</div>
        <div className="hero-floater pepper">🌶️</div>
        <div className="hero-floor-shadow" />
        <div className="hero-stripe" />
      </div>
    </section>
  )
}
