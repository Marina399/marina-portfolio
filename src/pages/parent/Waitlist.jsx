import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
export default function Waitlist() {
  return <CaseStudyLayout
    slug="waitlist"
    title="Waitlist Management"
    subtitle="Intelligent waitlist and auto-enrollment for nurseries - no more manual tracking."
    tags={['Auto-enrollment','Communication tools','Real-time updates','Nursery admissions']}
    problem="No centralized waitlist system. Spreadsheets, paper lists. Manual calls when a spot opened. Parent anxiety."
    coreQuestion='"How do you turn a messy waitlist into an automated, fair, and transparent admissions pipeline?"'
    decisions={[
      { title: 'One source of truth', body: 'All waitlist entries in Parent. Full history tracked.' },
      { title: 'Auto-enrollment flow', body: 'System notifies parents in order. First to confirm gets the spot. Time-stamped responses.' },
      { title: 'Parent portal view', body: 'Parents see anonymized position, estimated wait time, receive automatic updates.' },
    ]}
    flow={['Apply and join waitlist','Spot opens - system notifies next family (48h to accept)','Accept or pass - auto move to next']}
    outcome="Admissions teams save 15+ hours per week. Parents receive automatic updates. Nurseries fill open spots 3x faster."
    uat="Tested with admissions staff and real parents. Handoff included notification logic, timeout rules, edge cases (siblings, age groups)."
    stats={[
      { num: '15+', label: 'Hours saved/week' },
      { num: '3x', label: 'Faster enrollment' },
      { num: '48h', label: 'Response window' },
      { num: '0', label: 'Manual calls needed' },
    ]}
  />
}
