import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  function scrollTo(id) {
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '48px 48px 32px', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
          <div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, marginBottom: 6 }}>Marina Bassem</p>
            <p style={{ fontSize: 13, color: 'var(--ink-muted)' }}>Product Designer · Cairo, Egypt</p>
            <p style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 4 }}>Open to remote & relocation</p>
          </div>

          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 12 }}>Navigation</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <button onClick={() => scrollTo('work')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--ink-soft)', textAlign: 'left' }}>Work</button>
                <button onClick={() => scrollTo('process')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--ink-soft)', textAlign: 'left' }}>Process</button>
                <Link to="/contact" style={{ fontSize: 14, color: 'var(--ink-soft)' }}>Contact</Link>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 12 }}>Connect</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="mailto:marinabassem.021@gmail.com" style={{ fontSize: 14, color: 'var(--blue-deep)' }}>Email</a>
                <a href="https://www.linkedin.com/in/marina-bassem-017465227/" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: 'var(--blue-deep)' }}>LinkedIn</a>
                <a href="https://www.behance.net/marinabassem2" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: 'var(--blue-deep)' }}>Behance</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="divider" />
        <p style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 24, textAlign: 'center' }}>
          © 2025 Marina Bassem · Designed with care in Cairo
        </p>
      </div>
    </footer>
  )
}
