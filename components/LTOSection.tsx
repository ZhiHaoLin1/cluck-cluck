'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'

function useCountdown() {
  const getRemaining = () => {
    const now = new Date()
    const end = new Date()
    end.setHours(22, 0, 0, 0)
    if (now > end) end.setDate(end.getDate() + 1)
    const diff = Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000))
    return {
      h: String(Math.floor(diff / 3600)).padStart(2, '0'),
      m: String(Math.floor((diff % 3600) / 60)).padStart(2, '0'),
      s: String(diff % 60).padStart(2, '0'),
    }
  }

  const [time, setTime] = useState(getRemaining)

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

export default function LTOSection() {
  const { addToCart } = useCart()
  const { h, m, s } = useCountdown()
  const [added, setAdded] = useState(false)

  const handle = () => {
    addToCart('Spicy Mango Stack', 13.99)
    setAdded(true)
    setTimeout(() => setAdded(false), 900)
  }

  return (
    <section className="lto-section" id="lto">
      <div className="lto-left">
        <div className="lto-eyebrow">
          <span className="lto-blink" />
          Limited Time Only
        </div>
        <div className="lto-heat">
          <span className="lto-heat-tag hot">🌶️ Nashville Hot</span>
          <span className="lto-heat-tag new">⚡ New</span>
          <span className="lto-heat-tag limit">⏳ While Supplies Last</span>
        </div>
        <h2 className="lto-title">
          SPICY<br />
          <span className="lto-accent">MANGO</span><br />
          <span className="lto-stroke">STACK</span>
        </h2>
        <p className="lto-desc">
          Hot Nashville chicken, fresh mango habanero glaze, coconut cream waffle.
          Only until we run out — and we will run out.
        </p>
        <div className="lto-price-row">
          <div className="lto-price">$13.99</div>
          <div className="lto-price-old">$16.99</div>
          <div className="lto-price-save">Save $3</div>
        </div>
        <div className="countdown">
          <div className="cd-unit">
            <div className="cd-num">{h}</div>
            <div className="cd-label">Hrs</div>
          </div>
          <div className="cd-sep">:</div>
          <div className="cd-unit">
            <div className="cd-num">{m}</div>
            <div className="cd-label">Min</div>
          </div>
          <div className="cd-sep">:</div>
          <div className="cd-unit">
            <div className="cd-num">{s}</div>
            <div className="cd-label">Sec</div>
          </div>
        </div>
        <button
          className="btn-primary"
          onClick={handle}
          style={{ background: 'var(--yellow)', color: 'var(--black)', fontSize: 20, padding: '18px 40px', letterSpacing: 3 }}
        >
          {added ? '✓ ADDED!' : '🔥 ADD TO ORDER — $13.99'}
        </button>
      </div>

      <div className="lto-right">
        <Image
          src="https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev/mango.webp"
          alt="Spicy Mango Stack"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="50vw"
        />
      </div>
    </section>
  )
}
