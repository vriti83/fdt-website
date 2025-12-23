import "../styles/Services.css";
import { scrollToSection } from "../utils/scrollToSection";
// const scrollToSection = (id) => {
//   const section = document.getElementById(id);
//   if (section) {
//     section.scrollIntoView({ 
//         behavior: "smooth",
//     });
//   }
// };

const Services = () => {
  return (
    <section id="services" className="services">
      {/* Top Row */}
      <div className="services-header">
        <h2>
          Our <span>Services</span>
        </h2>

        <p className="services-tagline">
          ELEVATE YOUR BRAND AND
          <br />
          MAKE YOUR MARK IN HISTORY.
        </p>
      </div>

      {/* Buttons Grid */}
      <div className="services-grid">
        <button className="service-pill" onClick={() => scrollToSection("beam-setup")}>Beam Setup →</button>
        <button className="service-pill" onClick={() => scrollToSection("hr-automation")}>HR Automation →</button>
        <button className="service-pill" onClick={() => scrollToSection("erp-integration")}>ERP Integration →</button>

        <button className="service-pill" onClick={() => scrollToSection("rpa-solutions")}>RPA Solutions →</button>
        <button className="service-pill" onClick={() => scrollToSection("crm-sales")}>CRM & Sales Solutions →</button>
        <button className="service-pill" onClick={() => scrollToSection("marketing-communication")}>Marketing & Communication →</button>

        <button className="service-pill center" onClick={() => scrollToSection("accounts-finance")}>
          Accounts & Finance Automation →
        </button>

        <button className="service-pill center">Book For Demo →</button>
      </div>
    </section>
  );
};

export default Services;
