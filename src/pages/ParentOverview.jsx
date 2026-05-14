import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useFadeIn } from '../components/useFadeIn.js'

const modules = [
  { slug: 'report-builder', title: 'Report Builder', desc: 'Non-technical admins build custom reports without code - 40+ local components from scratch. Filter, preview, export, schedule.' },
  { slug: 'schedule-plan', title: 'Schedule Plan', desc: 'One plan for hundreds of children. Split payments, edge cases, regional flexibility - from hours to minutes.' },
  { slug: 'child-development', title: 'Child Development Dashboard', desc: 'Progress tracking across 3 platforms (desktop, tablet, mobile) + RTL Arabic. Teachers see insights instantly.' },
  { slug: 'invoice-automations', title: 'Invoice Automations', desc: 'Automated payment reminders, recurring billing, and full audit trail. No more manual follow-ups.' },
  { slug: 'waitlist', title: 'Waitlist', desc: 'Manage nursery admissions: waitlist, auto-enrollment, and parent communication.' },
  { slug: 'global-search', title: 'Global Search', desc: 'One search bar. Every entity. Instant results across the entire platform. 70% time saved.' },
]

export default function ParentOverview() {
  useFadeIn()
  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ padding: '80px 48px 60px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="section-label">Case Study</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: 16 }}>
              Parent - Global Childcare Ecosystem
            </h1>
            <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 20 }}>
              An all-in-one cloud platform connecting nurseries, educators, and families - from enrollment to billing to child development.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
              {['Canada','Europe','UAE','Middle East'].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Nursery Admins','Teachers','Parents'].map(t => <span key={t} className="tag blush">{t}</span>)}
            </div>
          </div>
          <div className="placeholder" style={{ height: 280 }}>[ Screenshot: Parent platform dashboard mockup ]</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2 fade-in" style={{ gap: 48, marginBottom: 64 }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 400, marginBottom: 16 }}>The Challenge</h2>
              <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.8 }}>
                Parent serves diverse cultures and billing systems across three continents. In Canada, split payments by session or item. In the Middle East, percentage-based splits. Every region has its own compliance, language (English + Arabic RTL), and device needs (desktop, tablet, mobile). The complexity was massive - but users needed simplicity.
              </p>
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 400, marginBottom: 16 }}>My Role</h2>
              <ul className="outcome-list">
                <li>Senior Product Designer</li>
                <li>End-to-end ownership: Report Builder, Finance, Schedule Plan, UAT</li>
                <li>Design system extension (40+ local components)</li>
                <li>Stakeholder management & developer handoff</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <span className="section-label">Key Features I Designed & Shipped</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 400, color: 'var(--ink)', marginBottom: 32 }}>Six modules. End to end.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {modules.map(m => (
              <div key={m.slug} className="card fade-in">
                <div className="placeholder" style={{ height: 120, marginBottom: 20 }}>[ Screenshot: {m.title} ]</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 400, marginBottom: 10, color: 'var(--ink)' }}>{m.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 20 }}>{m.desc}</p>
                <Link to={`/parent/${m.slug}`} className="btn" style={{ fontSize: 13 }}>View case study →</Link>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 40, textAlign: 'center', fontSize: 13, color: 'var(--ink-muted)', fontStyle: 'italic' }}>
            Each case study includes research, design system decisions, UAT process, and real screenshots.
          </p>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/arise" style={{ fontSize: 14, color: 'var(--blue-deep)', fontWeight: 500 }}>Check out Arise case study →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
