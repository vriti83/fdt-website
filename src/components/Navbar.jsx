import { Link } from 'react-router-dom'


export default function Navbar() {
return (
<nav style={{ padding: '20px 8%', display: 'flex', justifyContent: 'space-between' }}>
<h2>fDT</h2>
<div style={{ display: 'flex', gap: '20px' }}>
<Link to="/">Home</Link>
<Link to="/services">Services</Link>
<Link to="/about">About</Link>
</div>
</nav>
)
}