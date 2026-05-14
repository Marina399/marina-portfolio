import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
export default function InvoiceAutomations() {
  return <CaseStudyLayout
    slug="invoice-automations"
    title="Invoice Automations"
    subtitle="Automated payment reminders and recurring billing - built for complex childcare billing scenarios."
    tags={['6 billing cycles','Smart reminders','Full audit trail','Shipped to production']}
    problem="Every payment reminder was manual. No automation, no recurring logic, zero audit trail."
    coreQuestion={"\"How do you automate billing across multiple payment cultures - without losing flexibility or accountability?\""}
    decisions={[
      { title: 'Smart reminders', body: 'Automated notifications before due date, on due date, and after overdue. Fully customizable timing.' },
      { title: 'Recurring logic engine', body: 'Supports term, twice-per-month, custom X days. Set once, runs forever.' },
      { title: 'Audit trail', body: 'Every reminder, payment, change - logged with timestamp and user.' },
    ]}
    flow={['Select billing cycle','Set reminder schedule','Review and activate']}
    outcome="Admins save 20+ hours per month. Payment reminders sent automatically to 500+ parents weekly. The only module that completed full product cycle: handoff → UAT → production → customer feedback ✅"
    uat="Tested with finance admins across Canada & Middle East. Edge cases covered: pro-rata, mid-cycle cancellations, multi-payer splits."
    stats={[
      { num: '6', label: 'Billing cycles' },
      { num: '500+', label: 'Parents notified weekly' },
      { num: '20+', label: 'Hours saved/month' },
      { num: '✅', label: 'Customer feedback' },
    ]}
  />
}
