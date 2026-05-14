import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
export default function SchedulePlan() {
  return <CaseStudyLayout
    slug="schedule-plan"
    title="Schedule Plan"
    subtitle="From hours of manual work to minutes of bulk planning - one plan for hundreds of children."
    tags={['500 children','400 payers','Split payments','Canada & Middle East']}
    problem="Teachers manually created a full plan for each child - 20 children meant 20 separate plans. Manual entry for each payer, discount, subsidy. No flexibility for split payments or edge cases."
    coreQuestion={"How do you design a system that's bulk by default - but flexible by exception?"}
    decisions={[
      { title: "Warn, don't block", body: 'Warn about missing payers but continue; exclude or add without losing work.' },
      { title: 'Regional flexibility', body: 'Canada: split by session/item; Middle East: percentage splits. Same UI, hidden complexity.' },
      { title: "Override without breaking", body: 'Edit one child\'s plan, keep all others. Group and individual logic separated.' },
    ]}
    flow={['Setup & Build Your Plan','Assign Children & Payers','Review & Generate']}
    outcome="500 children's plans in under 10 minutes. Split payments handled per region. Teachers saved 15+ hours per week."
    uat="Passed UAT with admins from Canada & Middle East. Handoff included flow diagrams and validation rules."
    stats={[
      { num: '500', label: 'Children in bulk' },
      { num: '400', label: 'Payers handled' },
      { num: '3', label: 'Steps total' },
      { num: '2', label: 'Regions supported' },
    ]}
  />
}
