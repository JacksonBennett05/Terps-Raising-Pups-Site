import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="TRP logo" className="navbar-logo" />
      </div>

      <div className="navbar-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/getting-started">Getting Started</NavLink>
        <NavLink to="/puppy-raisers">Puppy Raisers</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </div>

      <div className="navbar-right">
        <img src="/gdf.png" alt="GDF logo" className="navbar-logo-right" />
        <img src="/avd.png" alt="AVD logo" className="navbar-logo-right" />
      </div>
    </nav>
  )
}

export default Navbar