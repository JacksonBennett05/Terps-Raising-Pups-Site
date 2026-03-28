import './Footer.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <main className='footer'>
      <div className='footer-line'>
        <div className='trp-footer'>
          <p className='trp-footer'>
            © 2025 by Terps Raising Pups
          </p>
          <a
            href='https://www.facebook.com/terpsraisingpups'
            target='_blank'
            rel='noopener noreferrer'
            className='facebook-btn1'
          >
            <FaFacebook />
          </a>
          <a
            href='https://www.instagram.com/terpsraisingpups'
            target='_blank'
            rel='noopener noreferrer'
            className='instagram-btn1'
          >
            <FaInstagram />
            
          </a>
        </div>
        <div className='gdf-footer'>
          <p>
            Guide Dog Foundation for the Blind
          </p>
        </div>
        
      </div>
    </main>
  )
}

export default Footer