import { Link } from 'react-router-dom'
import { useFadeIn } from '../components/useFadeIn.js'

export default function ArisePage() {
  useFadeIn()
  return (
    <div style={{ paddingTop: 68 }}>
      {/* Hero */}
      <section style={{ padding: '72px 48px 60px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="section-label">Case Study</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: 16 }}>Arise</h1>
            <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 20 }}>A safe, inclusive digital home for people with disabilities - built from scratch.</p>
            <p style={{ fontSize: 13, color: 'var(--blue-deep)', fontWeight: 500, marginBottom: 16 }}>Product Designer - Research, Design System, UI/UX, UAT</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Design System from 0','Web + Mobile App','Community','Anti-bullying','Resource Hub'].map(t => <span key={t} className="tag lavender">{t}</span>)}
            </div>
          </div>
          <div className="placeholder" style={{ height: 280 }}>[ Screenshot: Arise onboarding screens ]</div>
        </div>
        <style>{`@media(max-width:768px){section>div{grid-template-columns:1fr !important}}`}</style>
      </section>

      <div className="container">
        {/* Founder Story */}
        <section className="section-sm fade-in" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', paddingTop: 56 }}>
          <span className="section-label">The Origin</span>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
            "Peter Wasif, a pharmacist from Egypt living in the US, lost his left arm in an accident at age 27. He struggled to live with his new reality - depression, isolation, and the constant feeling that no one truly understood him. He searched for a community of people with similar experiences, but found nothing. So he decided to build it himself. Arise was born from his pain, his resilience, and his belief that no one should navigate disability alone."
          </p>
        </section>

        {/* Core Question */}
        <div className="highlight-box fade-in" style={{ maxWidth: 720, margin: '0 auto 56px' }}>
          "How do you build a social platform that's both feature-rich (like Facebook/Instagram) yet completely safe, accessible, and free of bullying - for users with diverse physical, visual, hearing, and cognitive needs?"
        </div>

        {/* My Role */}
        <section className="section-sm fade-in">
          <span className="section-label">My Role & Process</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 400, marginBottom: 24 }}>End-to-end ownership.</h2>
          <div className="grid-2" style={{ gap: 40 }}>
            <ul className="outcome-list">
              <li>End-to-end ownership: user research, design system, UI/UX, animations, prototyping, handoff, UAT</li>
              <li>Research-driven: interviewed users with different disabilities, analyzed competitor apps, translated needs into features</li>
              <li>Multi-disability types: physical, visual, hearing, intellectual, mental, developmental</li>
            </ul>
            <ul className="outcome-list">
              <li>Accessibility first: voice-to-text, screen reader support, high contrast, touch targets, RTL support</li>
              <li>Anti-bullying & safety: moderation tools, report flows, safe community guidelines</li>
              <li>Shipped design system with 100+ components, web + mobile responsive</li>
            </ul>
          </div>
        </section>

        {/* Challenges */}
        <section className="section-sm fade-in">
          <span className="section-label">Key Challenges</span>
          <div className="grid-3">
            {[
              { title: 'Multiple disability types', body: 'Physical, visual, hearing, intellectual, mental, developmental. Each needs different solutions.' },
              { title: 'Accessibility from day one', body: 'Not an afterthought. Voice-to-text, screen reader, high contrast, large touch targets.' },
              { title: 'Anti-bullying & safety', body: 'Unbreakable moderation tools, report flows, safe community guidelines baked into UX.' },
            ].map((c, i) => (
              <div key={i} className="card" style={{ background: 'var(--lavender)', borderColor: 'rgba(107,90,174,0.2)' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 300, color: '#9B8BC8', marginBottom: 12 }}>0{i+1}</div>
                <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 8, color: 'var(--ink)' }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Decisions */}
        <section className="section-sm fade-in">
          <span className="section-label">Key Decisions</span>
          <div className="grid-3">
            {[
              { title: 'Design System from scratch', body: 'Every component (buttons, inputs, cards, modals) built for consistency across web and mobile. Scalable and documented.' },
              { title: 'Community as the heart', body: 'Groups, chat, events, stories, reels. Users connect, share, and support each other like mainstream platforms.' },
              { title: 'Resource Hub for real needs', body: 'Jobs, medical resources, coaching, therapy, pharmacy integration, assistive device marketplace.' },
            ].map((d, i) => (
              <div key={i} className="card">
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 300, color: 'var(--blue-mid)', marginBottom: 12 }}>0{i+1}</div>
                <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 8 }}>{d.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6 }}>{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Flow */}
        <section className="section-sm fade-in">
          <span className="section-label">The Flow</span>
          <div className="step-flow">
            {[
              { label: 'Onboarding', img: '[ Screenshot: Onboarding flow ]' },
              { label: 'Explore Community', img: '[ Screenshot: Community feed and groups ]' },
              { label: 'Access Resources', img: '[ Screenshot: Resource hub ]' },
            ].map((s, i) => (
              <div key={i} className="step-item">
                <div className="step-num">{i+1}</div>
                <div className="placeholder" style={{ height: 100, marginBottom: 14 }}>{s.img}</div>
                <p style={{ fontSize: 14, color: 'var(--ink-mid)', fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="section-sm fade-in">
          <div className="dark-section">
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Outcome</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', textAlign: 'left' }}>
              <ul className="outcome-list" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <li style={{ color: 'rgba(255,255,255,0.8)' }}>Design system shipped: 100+ components, web + mobile responsive</li>
                <li style={{ color: 'rgba(255,255,255,0.8)' }}>UAT completed with real users - feedback integrated</li>
                <li style={{ color: 'rgba(255,255,255,0.8)' }}>Safe community features adopted: report, block, moderation tools</li>
                <li style={{ color: 'rgba(255,255,255,0.8)' }}>Voice-to-text and body language recognition ready for next phase</li>
              </ul>
              <div className="placeholder" style={{ height: 180, borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}>
                [ Screenshot: Arise community feed final ]
              </div>
            </div>
          </div>
        </section>

        {/* UAT */}
        <section className="section-sm fade-in" style={{ textAlign: 'center' }}>
          <p className="quote-inline">
            "Every feature passed UAT with users from different disability backgrounds. Handoff included component specs, responsive breakpoints, and accessibility guidelines. Animations and micro-interactions designed and delivered by Marina."
          </p>
        </section>

        <div style={{ textAlign: 'center', paddingBottom: 64 }}>
          <Link to="/parent" style={{ fontSize: 14, color: 'var(--blue-deep)', fontWeight: 500 }}>Check out my work on Parent →</Link>
        </div>
      </div>
    </div>
  )
}
