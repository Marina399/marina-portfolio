import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id) {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(250,250,248,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(160,196,232,0.2)' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 48px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <Link to="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--ink)', letterSpacing: '0.01em' }}>
          Marina Bassem
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          <button onClick={() => scrollTo('work')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--ink-soft)', letterSpacing: '0.03em' }}>Work</button>
          <button onClick={() => scrollTo('process')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--ink-soft)', letterSpacing: '0.03em' }}>Process</button>
          <Link to="/contact" className="btn" style={{ padding: '8px 20px', fontSize: 13 }}>Say hello →</Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5 }} className="menu-btn">
          <span style={{ width: 24, height: 1.5, background: 'var(--ink)', display: 'block' }} />
          <span style={{ width: 24, height: 1.5, background: 'var(--ink)', display: 'block' }} />
        </button>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .menu-btn { display: flex !important; }
        }
      `}</style>

      {menuOpen && (
        <div style={{ background: 'rgba(250,250,248,0.97)', padding: '24px 20px', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <button onClick={() => scrollTo('work')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--ink)', textAlign: 'left' }}>Work</button>
          <button onClick={() => scrollTo('process')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--ink)', textAlign: 'left' }}>Process</button>
          <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ fontSize: 16 }}>Contact</Link>
        </div>
      )}
    </header>
  )
}
