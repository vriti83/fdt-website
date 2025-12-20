import { Link } from 'react-router-dom'

export default function Services() {
    return (
        <section>
        <h2>Our Services</h2>
        <ul>
        <li><Link to="/marketing">Marketing & Communication</Link></li>
        <li><Link to="/finance">Accounts & Finance Automation</Link></li>
        </ul>
        </section>
    )
}