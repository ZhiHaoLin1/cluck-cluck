'use client'

import Image from 'next/image'
import { useState } from 'react'

const SIDES = [
  { icon: '🍟', name: 'Fries', price: '+$0' },
  { icon: '🥗', name: 'Slaw', price: '+$0' },
  {
    iconImg: 'https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev/macncheeselogo.png',
    name: 'Mac + Cheese',
    price: '+$1',
  },
  { icon: '🫘', name: 'Beans', price: '+$0' },
]

export default function UpsellStrip() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="upsell-strip">
      <div className="upsell-texture" />
      <div className="upsell-inner upsell-left">
        <div className="upsell-eyebrow">Don&apos;t forget</div>
        <div className="upsell-title">
          UPGRADE YOUR<br />
          <span className="highlight">SIDE.</span>
        </div>
        <div className="upsell-sub">Every combo comes with one side. Make it count.</div>
      </div>
      <div className="upsell-inner upsell-options">
        {SIDES.map((s) => (
          <div
            key={s.name}
            className={`upsell-option ${selected === s.name ? 'selected' : ''}`}
            onClick={() => setSelected(s.name)}
          >
            <span className="upsell-opt-icon">
              {s.iconImg ? (
                <Image src={s.iconImg} alt={s.name} width={32} height={32} style={{ objectFit: 'contain', display: 'block', margin: '0 auto' }} />
              ) : (
                s.icon
              )}
            </span>
            <span className="upsell-opt-name">{s.name}</span>
            <span className="upsell-opt-price">{s.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
