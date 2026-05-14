import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
export default function ChildDevelopment() {
  return <CaseStudyLayout
    slug="child-development"
    title="Child Development Dashboard"
    subtitle="Complex child progress data made simple - across every device and language."
    tags={['3 platforms','RTL Arabic','16+ columns','Instant insights']}
    problem="Empty tables on arrival. 16+ columns impossible to scan. Desktop-only design used on tablets and mobile."
    coreQuestion={"\"How do you make a teacher instantly see which child needs attention - without touching a single filter?\""}
    decisions={[
      { title: 'Zero state fix', body: 'Default curriculum pre-selected. Teachers see data immediately.' },
      { title: 'Cascading filters', body: 'Curriculum drives Areas drives Subareas. Users never see invalid combinations.' },
      { title: 'RTL mirroring', body: 'Full layout reversal for Arabic: tables, buttons, icons all mirrored.' },
    ]}
    flow={['Quick stats (Ahead/Behind/On track)','Advanced filter bar','Detailed table with column toggles']}
    outcome="Teachers see at-risk children in 2 seconds. Bulk approve observations in one click. Activity log tracks every change automatically."
    uat="Tested with teachers on actual devices (iPad, iPhone, Android tablets). Handoff included responsive breakpoints and RTL CSS specs."
    stats={[
      { num: '3', label: 'Platforms' },
      { num: '2', label: 'Languages' },
      { num: '2', label: 'New features' },
      { num: '0', label: 'Empty states' },
    ]}
  />
}
