import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import Hajok from './Hajok'
import DenmarkStrait from './DenmarkStrait'
import HajoReszletek from './HajoReszletek'

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-2">
        <div className="container-fluid">
          <Link className="navbar-brand me-4" to="/">Csatahajók</Link>
          <div className="collapse navbar-collapse text-white" id="navbarNav">
            <Link className="nav-link" to="/denmark-strait">A Denmark Strait csata</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Hajok />} />
        <Route path="/hajo/:name" element={<HajoReszletek />} />
        <Route path="/denmark-strait" element={<DenmarkStrait />} />
      </Routes>
    </Router>
  )
}

export default App
