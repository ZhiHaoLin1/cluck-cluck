import Image from 'next/image'

const LINKS = ['Menu', 'Catering', 'Gift Cards', 'Careers', 'Instagram']

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <Image
          src="https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev/logo.webp"
          alt="Cluck & Stack"
          width={120}
          height={28}
          style={{ height: '28px', width: 'auto', display: 'block', opacity: 0.85 }}
        />
      </div>
      <ul className="footer-links">
        {LINKS.map((l) => (
          <li key={l}>
            <a href="#">{l}</a>
          </li>
        ))}
      </ul>
      <div className="footer-copy">© 2026 Cluck &amp; Stack. All rights reserved.</div>
    </footer>
  )
}
