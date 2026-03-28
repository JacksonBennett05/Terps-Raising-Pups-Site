import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import GettingStarted from './pages/GettingStarted'
import PuppyRaisers from './pages/PuppyRaisers'
import ContactUs from './pages/ContactUs'
import OurPups from './pages/OurPups'
import OurLeaders from './pages/OurLeaders'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/our-pups" element={<OurPups />} />
        <Route path="/our-leaders" element={<OurLeaders />} />

        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/puppy-raisers" element={<PuppyRaisers />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App