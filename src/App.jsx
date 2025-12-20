import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Marketing from './pages/Marketing'
import Finance from './pages/Finance'
import About from './pages/About'


export default function App() {
return (
<>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/marketing" element={<Marketing />} />
<Route path="/finance" element={<Finance />} />
<Route path="/about" element={<About />} />
</Routes>
<Footer />
</>
)
}