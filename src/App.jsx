import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import CompanyDetail from './pages/CompanyDetail.jsx'
import AgenciesMap from './pages/AgenciesMap.jsx'
import Nav from './components/Nav.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/company/:id" element={<CompanyDetail />} />
        <Route path="/london-agencies" element={<AgenciesMap />} />
      </Routes>
    </>
  )
}
