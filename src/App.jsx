import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import CompanyDetail from './pages/CompanyDetail.jsx'
import Nav from './components/Nav.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/company/:id" element={<CompanyDetail />} />
      </Routes>
    </>
  )
}
