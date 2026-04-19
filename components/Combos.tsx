'use client'

import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'

interface Combo {
  num: string
  tag: string
  icon?: string
  iconImg?: string
  name: string
  desc: string
  includes: string[]
  price: number
  featured?: boolean
}

const COMBOS: Combo[] = [
  {
    num: '1',
    tag: '⭐ Most Popular',
    name: 'THE CLASSIC STACK',
    desc: 'Two crispy thighs on a golden waffle. Comes with your choice of sauce and a drink.',
    includes: ['2 Crispy Thighs', '1 Waffle', '1 Sauce', 'Lg. Drink'],
    price: 13.99,
    featured: true,
  },
  {
    num: '2',
    tag: '🌶 Spicy',
    icon: '🔥',
    name: 'HEAT SEEKER',
    desc: 'Nashville hot chicken, habanero honey, pickled jalapeños, extra waffle.',
    includes: ['Hot Chicken', '2 Waffles', 'Lg. Drink'],
    price: 15.99,
  },
  {
    num: '3',
    tag: '👑 Premium',
    icon: '🥂',
    name: 'BRUNCH BOSS',
    desc: 'Chicken + waffles + 2 sides + bottomless coffee or OJ. The full experience.',
    includes: ['Full Stack', '2 Sides', 'Bottomless Coffee'],
    price: 19.99,
  },
  {
    num: '4',
    tag: '👨‍👩‍👧 Family',
    iconImg: 'https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev/chickenbucket.webp',
    name: 'FAMILY PACK',
    desc: '8-piece chicken, 4 waffles, 3 sides, sauce sampler. Feeds the whole crew.',
    includes: ['8 Pc Chicken', '4 Waffles', '3 Sides', '4 Drinks'],
    price: 44.99,
  },
  {
    num: '5',
    tag: '🌿 Plant-Based',
    icon: '🥬',
    name: 'GARDEN STACK',
    desc: 'Crispy cauliflower, avocado cream, house waffle. All the crunch, zero compromise.',
    includes: ['Cauliflower', 'Avocado Cream', 'Md. Drink'],
    price: 13.49,
  },
]

function AddedButton({
  label,
  onClick,
  className,
}: {
  label: string
  onClick: () => void
  className?: string
}) {
  const [added, setAdded] = useState(false)

  const handle = () => {
    onClick()
    setAdded(true)
    setTimeout(() => setAdded(false), 900)
  }

  return (
    <button className={`${className ?? 'combo-add'} ${added ? 'added' : ''}`} onClick={handle}>
      {added ? '✓' : label}
    </button>
  )
}

export default function Combos() {
  const { addToCart } = useCart()

  return (
    <section className="combos" id="combos">
      <div className="combos-header">
        <div>
          <p className="section-label">🔥 Best Value</p>
          <h2 className="section-title">COMBO DEALS</h2>
        </div>
        <a href="#menu" className="see-all">Full Menu ↓</a>
      </div>

      <div className="combos-grid">
        {COMBOS.map((c) =>
          c.featured ? (
            <div key={c.name} className="combo-card featured">
              <span className="combo-num">{c.num}</span>
              <span className="combo-tag">{c.tag}</span>
              <div className="featured-info-panel">
                <div className="combo-name">{c.name}</div>
                <div className="combo-includes">
                  {c.includes.map((t) => (
                    <span className="include-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="combo-footer">
                <div className="combo-price">${c.price.toFixed(2)}</div>
                <AddedButton label="ADD +" onClick={() => addToCart(c.name, c.price)} />
              </div>
            </div>
          ) : (
            <div key={c.name} className="combo-card">
              <span className="combo-num">{c.num}</span>
              <span className="combo-tag">{c.tag}</span>
              {c.iconImg ? (
                <span className="combo-food-icon" style={{ fontSize: 40, display: 'block', marginBottom: 8 }}>
                  <Image src={c.iconImg} alt={c.name} width={48} height={48} style={{ objectFit: 'contain' }} />
                </span>
              ) : (
                <span className="combo-food-icon" style={{ fontSize: 40, display: 'block', marginBottom: 8 }}>
                  {c.icon}
                </span>
              )}
              <div className="combo-name">{c.name}</div>
              <div className="combo-desc">{c.desc}</div>
              <div className="combo-includes">
                {c.includes.map((t, i) => (
                  <span
                    className="include-tag"
                    key={t}
                    style={c.num === '2' && i === 0 ? { background: 'rgba(217,43,43,0.3)', color: '#ff8080' } : undefined}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="combo-footer">
                <div className="combo-price">${c.price.toFixed(2)}</div>
                <AddedButton label="ADD +" onClick={() => addToCart(c.name, c.price)} />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
