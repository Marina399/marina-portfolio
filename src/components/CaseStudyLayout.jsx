import { Link } from 'react-router-dom'
import { useFadeIn } from './useFadeIn.js'

const parentModules = [
  { slug: 'report-builder', title: 'Report Builder' },
  { slug: 'schedule-plan', title: 'Schedule Plan' },
  { slug: 'child-development', title: 'Child Development Dashboard' },
  { slug: 'invoice-automations', title: 'Invoice Automations' },
  { slug: 'waitlist', title: 'Waitlist' },
  { slug: 'global-search', title: 'Global Search' },
]

export default function CaseStudyLayout({ slug, title, subtitle, role, tags, problem, coreQuestion, decisions, flow, outcome, uat, stats }) {
  useFadeIn()
  const idx = parentModules.findIndex(m => m.slug === slug)
  const prev = parentModules[idx - 1]
  const next = parentModules[idx + 1]

  return (
    <div style={{ paddingTop: 68 }}>
      {/* Breadcrumb + back */}
      <div style={{ padding: '24px 48px 0', maxWidth: 1200, margin: '0 auto' }}>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/parent">Parent</Link>
          <span>/</span>
          <span style={{ color: 'var(--ink-mid)' }}>{title}</span>
        </div>
        <Link to="/parent" style={{ fontSize: 13, color: 'var(--blue-deep)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>← Back to Parent overview</Link>
      </div>

      {/* Hero */}
      <section style={{ padding: '40px 48px 60px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="section-label">Parent · Case Study</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: 14 }}>{title}</h1>
            <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 20 }}>{subtitle}</p>
            <p style={{ fontSize: 13, color: 'var(--blue-deep)', fontWeight: 500, marginBottom: 16 }}>{role || 'Senior Product Designer - End-to-end ownership'}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
          <div className="placeholder" style={{ height: 260 }}>[ Screenshot: {title} final UI ]</div>
        </div>
        <style>{`@media(max-width:768px){section>div{grid-template-columns:1fr !important}}`}</style>
      </section>

      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        {/* Problem */}
        <section className="section-sm fade-in" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', paddingTop: 56 }}>
          <span className="section-label">The Problem</span>
          <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.8 }}>{problem}</p>
        </section>

        {/* Core Question */}
        <div className="highlight-box fade-in" style={{ maxWidth: 720, margin: '0 auto 56px' }}>
          {coreQuestion}
        </div>

        {/* Key Decisions */}
        <section className="section-sm fade-in">
          <span className="section-label">Key Design Decisions</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 400, marginBottom: 32 }}>Three decisions that shaped the solution.</h2>
          <div className="grid-3">
            {decisions.map((d, i) => (
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
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 400, marginBottom: 32 }}>Three steps to success.</h2>
          <div className="step-flow">
            {flow.map((step, i) => (
              <div key={i} className="step-item">
                <div className="step-num">{i+1}</div>
                <div className="placeholder" style={{ height: 100, marginBottom: 14 }}>[ Screenshot: step {i+1} ]</div>
                <p style={{ fontSize: 14, color: 'var(--ink-mid)', fontWeight: 500, lineHeight: 1.5 }}>{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="section-sm fade-in">
          <div className="dark-section">
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Outcome</span>
            <div className="stat-row">
              {stats.map((s, i) => (
                <div key={i} className="stat">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="serif" style={{ fontSize: '1.2rem', fontStyle: 'italic', maxWidth: 600, margin: '0 auto' }}>{outcome}</p>
          </div>
        </section>

        {/* UAT */}
        <section className="section-sm fade-in" style={{ textAlign: 'center' }}>
          <span className="section-label">UAT & Handoff</span>
          <p className="quote-inline" style={{ fontStyle: 'italic' }}>{uat}</p>
        </section>

        {/* Case nav */}
        <div className="case-nav">
          {prev ? (
            <Link to={`/parent/${prev.slug}`}>← {prev.title}</Link>
          ) : <span />}
          {next ? (
            <Link to={`/parent/${next.slug}`}>{next.title} →</Link>
          ) : <span />}
        </div>
      </div>
    </div>
  )
}
