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

      <div className="hero-right">
        <div className="hero-glow-spill" />
        <div className="hero-floater drip">🍯</div>
        <div className="hero-floater star">✦</div>
        <div className="hero-floater crumb1" />
        <div className="hero-floater crumb2" />
        <div className="hero-floater crumb3" />
        <Image
          className="hero-plate"
          src="https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev/clucknwaffle.png"
          alt="Chicken and Waffles"
          width={600}
          height={600}
          priority
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
