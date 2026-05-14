import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
export default function ReportBuilder() {
  return <CaseStudyLayout
    slug="report-builder"
    title="Report Builder"
    subtitle="Giving non-technical admins the power of a data analyst - without making them feel like one."
    tags={['40+ local components','5 data entities','Export & recurring']}
    problem="Nursery admins needed custom reports daily - but had no way to build them without technical help. Every new report request meant writing SQL queries and building a new UI, blocking developers. Users exported from 5 separate entities (Children, Contacts, Staff, Finance, Schedule) and merged manually in Excel - slow and error-prone."
    coreQuestion={"\"How do you give a nursery admin the power of a data analyst - without making them feel like one?\""}
    decisions={[
      { title: "Warn, don't block", body: 'Warn about missing data but continue; exclude or add without losing work.' },
      { title: 'Live preview', body: 'Every change to filters or columns reflects instantly - no save and reload.' },
      { title: '40+ local components', body: 'Built custom components for each data type: text, number, date, select, etc.' },
    ]}
    flow={['Choose data entity','Add filters and columns','Preview, export, or schedule']}
    outcome="No more developer requests. Admins build their own reports. Recurring reports sent automatically weekly/monthly. Export to CSV, PDF, Excel in one click."
    uat="Every report builder component passed UAT with real nursery admins. Handoff to developers included detailed specs, edge cases, and responsive behavior across desktop, tablet, and mobile."
    stats={[
      { num: '40+', label: 'Local components' },
      { num: '5', label: 'Data entities' },
      { num: '0', label: 'Developer requests' },
      { num: '∞', label: 'Report variations' },
    ]}
  />
}
