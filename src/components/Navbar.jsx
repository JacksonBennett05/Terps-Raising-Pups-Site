import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  const isAboutActive =
    location.pathname === '/about' ||
    location.pathname === '/our-pups' ||
    location.pathname === '/our-leaders'

  const isGettingStartedActive =
    location.pathname === '/getting-started' ||
    location.pathname === '/puppy-raising' ||
    location.pathname === '/puppy-sitting'

  const isPuppyRaiserActive =
    location.pathname === '/resources' ||
    location.pathname === '/important-info' ||
    location.pathname === '/contact-us'

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img src='/trp/logo.png' alt='TRP logo' className='navbar-logo' />
      </div>

      <div className='navbar-center'>
        <NavLink to='/'>Home</NavLink>

        <div className='dropdown'>
          <NavLink to='/about' className={`nav-top-link ${isAboutActive ? 'active' : ''}`}>About</NavLink>
          <div className='dropdown-menu'>
            <Link to='/our-pups'>Our Pups</Link>
            <Link to='/our-leaders'>Our Leaders</Link>
          </div>
        </div>

        <div className='dropdown'>
          <NavLink to='/getting-started' className={`nav-top-link ${isGettingStartedActive ? 'active' : ''}`}>Getting Started</NavLink>
          <div className='dropdown-menu'>
            <Link to='/puppy-raising'>Puppy Raising</Link>
            <Link to='/puppy-sitting'>Puppy Sitting</Link>
          </div>
        </div>

        <div className='dropdown'>
          <NavLink to='/resources' className={`nav-top-link ${isPuppyRaiserActive ? 'active' : ''}`}>Resources</NavLink>
          <div className='dropdown-menu'>
            <Link to='/important-info'>Important Info</Link>
            <Link to='/contact-us'>Contact Us</Link>
          </div>
        </div>

        
      </div>

      <div className='navbar-right'>
        <img src='/trp/gdf.png' alt='GDF logo' className='navbar-logo-right' />
        <img src='/trp/avd.png' alt='AVD logo' className='navbar-logo-right' />
      </div>
    </nav>
  )
}

export default Navbar