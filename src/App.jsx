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
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/denmark-strait">A Denmark Strait csata</Link>
              </li>
            </ul>
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
