import { Routes, Route } from 'react-router-dom'
import Index from './pages/index.jsx'
import About from './pages/About.jsx'
import Services from './pages/services.jsx'
import Projects from './pages/projects.jsx'
import Clients from './pages/clients.jsx'
import Companys from './pages/companys.jsx'
import CompanyDetail from './pages/CompanyDetail.jsx'
import Contact from './pages/contact.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/companys" element={<Companys />} />
        <Route path="/companys/:id" element={<CompanyDetail />} />
        <Route path="/contact" element={<Contact />} />
                
        
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App