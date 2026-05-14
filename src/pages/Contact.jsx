import { useFadeIn } from '../components/useFadeIn.js'

export default function ContactPage() {
  useFadeIn()
  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ padding: '80px 48px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          {/* Left */}
          <div className="fade-in">
            <span className="section-label">Contact</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: 16 }}>
              Let's work together.
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink-soft)', marginBottom: 32 }}>
              Open to full-time roles & remote opportunities.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 6 }}>Email</p>
                <a href="mailto:marinabassem.021@gmail.com" style={{ fontSize: 16, color: 'var(--blue-deep)', fontWeight: 500 }}>marinabassem.021@gmail.com</a>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 6 }}>LinkedIn</p>
                <a href="https://www.linkedin.com/in/marina-bassem-017465227/" target="_blank" rel="noreferrer" style={{ fontSize: 16, color: 'var(--blue-deep)', fontWeight: 500 }}>linkedin.com/in/marina-bassem</a>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 6 }}>Behance</p>
                <a href="https://www.behance.net/marinabassem2" target="_blank" rel="noreferrer" style={{ fontSize: 16, color: 'var(--blue-deep)', fontWeight: 500 }}>behance.net/marinabassem2</a>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 6 }}>Location</p>
                <p style={{ fontSize: 16, color: 'var(--ink-mid)' }}>Cairo, Egypt · Available for relocation</p>
              </div>
            </div>
          </div>

          {/* Right - form */}
          <div className="card fade-in" style={{ position: 'relative' }}>
            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, opacity: 0.2, pointerEvents: 'none' }}>
              <path d="M 200 150 C 200 80 160 30 100 50 C 40 70 10 130 40 190 C 70 250 150 260 200 210 C 250 160 200 220 200 150 Z" fill="#A0C4E8"/>
            </svg>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: 24, color: 'var(--ink)' }}>Send a message</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 8 }}>Name</label>
                <input type="text" placeholder="Your name" style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)', fontSize: 15, background: 'var(--bg)', color: 'var(--ink)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 8 }}>Email</label>
                <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)', fontSize: 15, background: 'var(--bg)', color: 'var(--ink)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 8 }}>Message</label>
                <textarea placeholder="What's on your mind?" rows={5} style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)', fontSize: 15, background: 'var(--bg)', color: 'var(--ink)', outline: 'none', resize: 'vertical' }} />
              </div>
              <button className="btn primary" style={{ alignSelf: 'flex-start' }}>Send message →</button>
            </div>

            <p style={{ marginTop: 20, fontSize: 13, color: 'var(--ink-muted)', fontStyle: 'italic' }}>I'll get back to you within 48 hours.</p>
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div{grid-template-columns:1fr !important}}`}</style>
      </section>
    </div>
  )
}
