import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
export default function GlobalSearch() {
  return <CaseStudyLayout
    slug="global-search"
    title="Global Search"
    subtitle="One search bar. Every entity. Instant results across the entire platform."
    tags={['Cross-entity search','Location switch','Keyboard shortcuts','70% time saved']}
    problem="7+ entities, each with its own search. Users had to know where to look. No shortcuts for power users."
    coreQuestion='"How do you let users find anything - a child, a payment, a room, an inquiry - from one place, in seconds?"'
    decisions={[
      { title: 'Single entry point', body: 'One global search bar in top nav. Ctrl+K / Cmd+K opens search.' },
      { title: 'Tabbed results', body: 'Results grouped by entity (Children, Staff, Billing, etc.). Filter by tab without retyping.' },
      { title: 'Location-aware', body: 'Includes current location; one-click to switch locations and see cross-site results.' },
    ]}
    flow={['Type anywhere (autocomplete suggests top matches)','Results grouped by entity','Click any result to jump directly']}
    outcome="Search time reduced by 70%. Admins save 10+ hours per week. Keyboard shortcuts adopted by 85% of daily users within 2 weeks."
    uat="Tested with nursery admins, finance staff, teachers. Handoff included debouncing logic, result ranking algorithm, location-switch edge cases."
    stats={[
      { num: '70%', label: 'Time saved' },
      { num: '85%', label: 'Shortcut adoption' },
      { num: '10+', label: 'Hours saved/week' },
      { num: '7+', label: 'Entities unified' },
    ]}
  />
}
