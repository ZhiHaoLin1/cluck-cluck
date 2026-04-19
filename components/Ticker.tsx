const ITEMS = [
  'CRISPY FRIED CHICKEN',
  'GOLDEN BELGIAN WAFFLES',
  'HOUSEMADE MAPLE BUTTER',
  'SPICY HONEY DRIZZLE',
  'OPEN DAILY 8AM–10PM',
  'FREE REFILLS ON DRINKS',
  'DINE IN · TAKEOUT · DELIVERY',
]

// Duplicate for seamless loop
const ALL = [...ITEMS, ...ITEMS]

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {ALL.map((item, i) => (
          <span className="ticker-item" key={i}>
            {item} <span className="ticker-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
