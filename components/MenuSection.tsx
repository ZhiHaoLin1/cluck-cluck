'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

interface MenuItem {
  img: string
  name: string
  desc: string
  price: number
  badge?: { label: string; type: 'new' | 'popular' }
}

const BASE = 'https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev/'

const MENU: Record<string, MenuItem[]> = {
  chicken: [
    { img: 'thighstack.webp',   name: 'Classic Thigh Stack', desc: 'Two crispy thighs, maple butter waffle, housemade sauce', price: 10.99, badge: { label: '★ #1', type: 'popular' } },
    { img: 'nashville.webp',    name: 'Nashville Hot',       desc: 'Cayenne-laced fried chicken, pickle chips, honey drizzle', price: 11.99, badge: { label: 'New', type: 'new' } },
    { img: 'brunchstack.webp',  name: 'Brunch Stack',        desc: 'Chicken, waffle, fried egg, cheddar, maple sriracha', price: 12.99 },
    { img: 'gardenstack.webp',  name: 'Garden Stack',        desc: 'Crispy cauliflower, avocado cream, house waffle, chili oil', price: 10.49 },
    { img: 'honey%20butter.webp', name: 'Honey Butter',      desc: 'Sweet glazed chicken, compound honey butter, crispy waffle', price: 11.49, badge: { label: 'Fan Fav', type: 'popular' } },
    { img: 'kids%20stack.webp', name: 'Kids Stack',          desc: '2 tenders, mini waffle, choice of side, juice box', price: 7.99 },
    { img: 'loaded.webp',       name: 'Loaded Stack',        desc: 'Double chicken, bacon, cheddar sauce, caramelized onion', price: 14.99 },
    { img: 'triplestack.webp',  name: 'Triple Stack',        desc: 'Three waffles, three pieces. A tower. Meant to be shared — or not.', price: 18.99, badge: { label: 'New', type: 'new' } },
  ],
  sides: [
    { img: 'fries.webp',    name: 'Seasoned Fries', desc: 'House seasoning blend, served hot', price: 3.49 },
    { img: 'coleslaw.webp', name: 'Creamy Slaw',   desc: 'Classic coleslaw, creamy dressing, celery seed', price: 2.99 },
    { img: 'macnchese.webp',name: 'Mac + Cheese',  desc: 'Sharp cheddar, gruyere, crispy breadcrumb top', price: 4.49 },
    { img: 'corn.webp',     name: 'Street Corn',   desc: 'Roasted corn, cotija, chili butter, lime', price: 3.99 },
  ],
  drinks: [
    { img: 'fountaindrink.webp', name: 'Fountain Drink',      desc: 'Sm/Md/Lg — free refills always', price: 2.49 },
    { img: 'coffee.webp',        name: 'Fresh Brewed Coffee',  desc: 'House blend, bottomless on brunch items', price: 2.99 },
    { img: 'orangejuice.webp',   name: 'Fresh OJ',             desc: 'Squeezed in-house every morning', price: 3.99 },
    { img: 'tea.webp',           name: 'Sweet Tea',            desc: 'Southern-style, free refills', price: 2.49 },
  ],
  desserts: [
    { img: 'softserve.webp',     name: 'Maple Soft Serve', desc: 'Housemade maple soft serve, waffle cone', price: 4.49 },
    { img: 'dessertwaffle.webp', name: 'Dessert Waffle',   desc: 'Warm waffle, vanilla cream, berries, powdered sugar', price: 5.99 },
  ],
}

const TABS = [
  { id: 'chicken', label: 'Chicken & Waffles' },
  { id: 'sides',   label: 'Sides' },
  { id: 'drinks',  label: 'Drinks' },
  { id: 'desserts',label: 'Desserts' },
]

function AddBtn({ name, price }: { name: string; price: number }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handle = () => {
    addToCart(name, price)
    setAdded(true)
    setTimeout(() => setAdded(false), 900)
  }

  return (
    <button className={`item-add-btn ${added ? 'added' : ''}`} onClick={handle}>
      {added ? '✓' : '+'}
    </button>
  )
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('chicken')

  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <div>
          <p className="section-label">🍽 Full Menu</p>
          <h2 className="section-title">WHAT WE MAKE</h2>
        </div>
      </div>

      <div className="menu-tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`menu-tab ${activeTab === t.id ? 'active' : ''}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {TABS.map((t) => (
        <div key={t.id} className={`menu-grid menu-panel ${activeTab === t.id ? 'active' : ''}`}>
          {MENU[t.id].map((item) => (
            <div className="menu-item" key={item.name}>
              <div className="menu-item-img">
                <Image
                  src={`${BASE}${item.img}`}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 50vw, 25vw"
                />
                {item.badge && (
                  <span className={item.badge.type === 'new' ? 'menu-item-new' : 'menu-item-popular'}>
                    {item.badge.label}
                  </span>
                )}
              </div>
              <div className="menu-item-body">
                <div className="menu-item-name">{item.name}</div>
                <div className="menu-item-desc">{item.desc}</div>
                <div className="menu-item-footer">
                  <div className="menu-item-price">${item.price.toFixed(2)}</div>
                  <AddBtn name={item.name} price={item.price} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}
