import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ParentOverview from './pages/ParentOverview.jsx'
import ArisePage from './pages/Arise.jsx'
import ContactPage from './pages/Contact.jsx'
import ReportBuilder from './pages/parent/ReportBuilder.jsx'
import SchedulePlan from './pages/parent/SchedulePlan.jsx'
import ChildDevelopment from './pages/parent/ChildDevelopment.jsx'
import InvoiceAutomations from './pages/parent/InvoiceAutomations.jsx'
import Waitlist from './pages/parent/Waitlist.jsx'
import GlobalSearch from './pages/parent/GlobalSearch.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parent" element={<ParentOverview />} />
          <Route path="/parent/report-builder" element={<ReportBuilder />} />
          <Route path="/parent/schedule-plan" element={<SchedulePlan />} />
          <Route path="/parent/child-development" element={<ChildDevelopment />} />
          <Route path="/parent/invoice-automations" element={<InvoiceAutomations />} />
          <Route path="/parent/waitlist" element={<Waitlist />} />
          <Route path="/parent/global-search" element={<GlobalSearch />} />
          <Route path="/arise" element={<ArisePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
