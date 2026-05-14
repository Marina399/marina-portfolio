import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useFadeIn } from '../components/useFadeIn.js'

function OrganicBlob() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '50%', right: -60, transform: 'translateY(-55%)', width: 380, height: 380, opacity: 0.4, pointerEvents: 'none', zIndex: 0 }}>
      <path d="M 320 200 C 320 100 260 40 160 60 C 60 80 20 160 40 260 C 60 360 160 380 260 340 C 360 300 320 300 320 200 Z" fill="#A0C4E8"/>
    </svg>
  )
}

function ContinuousLine() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" style={{ width: 200, height: 120, opacity: 0.35 }}>
      <path d="M 20 60 C 40 20 80 20 100 60 C 120 100 160 100 180 60" stroke="#A0C4E8" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M 40 90 C 55 70 70 70 85 90 C 100 110 115 110 130 90" stroke="#D6EEFF" strokeWidth="1" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

export default function Home() {
  useFadeIn()

  return (
    <div style={{ paddingTop: 68 }}>
      {/* ── HERO ── */}
      <section style={{ padding: '96px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="section-label" style={{ marginBottom: 20 }}>Product Designer · Cairo, Egypt</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--ink)', marginBottom: 16, maxWidth: 700 }}>
              I turn complex systems into simple, intuitive experiences.
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--ink-soft)', marginBottom: 24 }}>
              Senior Product Designer. Problem solver. Handmade artist.
            </p>
            <p style={{ fontSize: 16, color: 'var(--ink-soft)', maxWidth: 560, lineHeight: 1.7, marginBottom: 36 }}>
              4+ years in SaaS & B2B. I design for scale, accessibility, and real human needs.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#work" className="btn primary">View my work</a>
              <Link to="/contact" className="btn">Or say hello →</Link>
            </div>
          </div>

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div className="placeholder circle-lg" style={{ width: 200, height: 200 }}>
              [ Marina's photo - soft, warm, handmade-craft vibe ]
            </div>
            <ContinuousLine />
          </div>
        </div>
        <OrganicBlob />

        <style>{`
          @media (max-width: 768px) {
            section > div { grid-template-columns: 1fr !important; }
            section > div > div:last-child { display: none !important; }
          }
        `}</style>
      </section>

      <hr className="divider" />

      {/* ── HOW I WORK ── */}
      <section id="process" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }} className="fade-in">
            <span className="section-label">Process</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 400, color: 'var(--ink)' }}>Built to ship. Designed to last.</h2>
          </div>

          <div className="grid-4 fade-in" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {[
              { num: '01', title: 'Research & Frame', body: 'User interviews, competitor analysis, problem definition.' },
              { num: '02', title: 'Design System First', body: 'Scalable components, local variants, accessible by default.' },
              { num: '03', title: 'Build & Iterate', body: 'Interactive prototypes, stakeholder sync, fast feedback.' },
              { num: '04', title: 'UAT & Handoff', body: 'Developer handoff, UAT testing, pixel-perfect push.' },
            ].map(step => (
              <div key={step.num} className="card" style={{ borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--blue-mid)', lineHeight: 1, marginBottom: 16 }}>{step.num}</div>
                <h3 style={{ fontSize: 16, fontWeight: 500, marginBottom: 10, color: 'var(--ink)' }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6 }}>{step.body}</p>
              </div>
            ))}
          </div>

          <p className="quote-inline fade-in" style={{ marginTop: 40 }}>
            I work in 2-day sprints with standups on Sunday & Wednesday. Every task has a scope, every delivery has a UAT.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* ── SELECTED WORK ── */}
      <section id="work" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }} className="fade-in">
            <span className="section-label">Selected Work</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 400, color: 'var(--ink)' }}>Projects that ship.</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* Parent card */}
            <div className="card fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                  <span className="tag">B2B</span>
                  <span className="tag">SaaS</span>
                  <span className="tag">RTL</span>
                  <span className="tag">Mobile/Desktop/Tablet</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 400, marginBottom: 10, color: 'var(--ink)' }}>Parent - Global Childcare Ecosystem</h3>
                <p style={{ fontSize: 13, color: 'var(--blue-deep)', fontWeight: 500, marginBottom: 14 }}>Senior Product Designer · Finance, Report Builder, Design System, UAT</p>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 10, lineHeight: 1.6 }}>
                  <strong>Challenge:</strong> 500 children, 400 payers, split payments across Canada & Middle East.
                </p>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 24, lineHeight: 1.6 }}>
                  <strong>Outcome:</strong> Bulk plan from hours → minutes. Report Builder from scratch with 40+ local components.
                </p>
                <Link to="/parent" className="btn primary">View case study →</Link>
              </div>
              <div className="placeholder" style={{ height: 220 }}>[ Screenshot: Parent platform overview ]</div>
              <style>{`@media (max-width: 768px) { .card { grid-template-columns: 1fr !important; } }`}</style>
            </div>

            {/* Arise card */}
            <div className="card fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                  <span className="tag lavender">Accessibility</span>
                  <span className="tag lavender">Design System</span>
                  <span className="tag lavender">Mobile/Web</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 400, marginBottom: 10, color: 'var(--ink)' }}>Arise - Social platform for people with disabilities</h3>
                <p style={{ fontSize: 13, color: 'var(--blue-deep)', fontWeight: 500, marginBottom: 14 }}>Product Designer · Full design system from scratch, accessibility, resource hub</p>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 10, lineHeight: 1.6 }}>
                  <strong>Challenge:</strong> Digital inclusion, voice-to-text, anti-bullying, discounted healthcare resources.
                </p>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 24, lineHeight: 1.6 }}>
                  <strong>Outcome:</strong> Design system from zero, shipped to production.
                </p>
                <Link to="/arise" className="btn primary">View case study →</Link>
              </div>
              <div className="placeholder" style={{ height: 220 }}>[ Screenshot: Arise community feed ]</div>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14, color: 'var(--ink-muted)' }}>✦ +15 more projects across web and mobile apps</p>
        </div>
      </section>

      <hr className="divider" />

      {/* ── DESIGN SYSTEMS ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }} className="fade-in">
            <span className="section-label">Design Systems</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 400, color: 'var(--ink)' }}>Systems, not just screens.</h2>
            <p style={{ fontSize: 15, color: 'var(--ink-soft)', maxWidth: 600, margin: '16px auto 0', lineHeight: 1.7 }}>
              I build design systems from scratch - and I extend existing ones with local components when needed. Consistency at scale.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }} className="fade-in">
            {['Arise (from 0)', 'Parent (extended + 40+ local components)', 'Scrumptions'].map(t => (
              <span key={t} className="tag" style={{ fontSize: 13, padding: '6px 18px' }}>{t}</span>
            ))}
          </div>

          <div className="highlight-box fade-in" style={{ maxWidth: 720, margin: '0 auto 32px' }}>
            "In Parent's Report Builder, I created 40+ local components so non-technical admins could build custom reports without touching code."
          </div>

          <div className="placeholder fade-in" style={{ height: 160, maxWidth: 720, margin: '0 auto' }}>
            [ Snapshot of local components - Report Builder ]
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── ABOUT ── */}
      <section className="section">
        <div className="container">
          <div className="grid-2 fade-in" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label">About</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: 20 }}>
                Hi, I'm Marina.<br />
                <span style={{ fontStyle: 'italic', color: 'var(--ink-soft)' }}>But you can call me Mira.</span>
              </h2>
              <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: 16 }}>
                I'm a Product Designer based in Cairo, Egypt. I love solving problems that look impossible at first - the kind where users are frustrated and stakeholders are lost.
              </p>
              <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: 16 }}>
                I don't just design screens. I design processes, systems, and handoffs. I make sure developers have everything they need, and that users get something that actually works.
              </p>
              <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.8 }}>
                When I'm not designing, I'm probably making handmade crafts - leather lamps, mixed media art - or reading about typography.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <div className="placeholder circle-lg">[ Handmade craft - leather lamp or mixed media ]</div>
              <p style={{ fontSize: 13, color: 'var(--ink-muted)', textAlign: 'center' }}>Cairo, Egypt · Open to remote & relocation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ background: '#111822', margin: '0 48px 80px', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--blue-light)', marginBottom: 16 }}>
          Let's build something great together.
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>Open to full-time roles & remote opportunities</p>
        <Link to="/contact" className="btn" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>Get in touch →</Link>
      </section>
    </div>
  )
}
