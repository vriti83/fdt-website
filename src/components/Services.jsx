import "../styles/Services.css";

const Services = () => {
  return (
    <section className="services">
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
        <button className="service-pill">Beam Setup →</button>
        <button className="service-pill">HR Automation →</button>
        <button className="service-pill">ERP Integration →</button>

        <button className="service-pill">RPA Solutions →</button>
        <button className="service-pill">CRM & Sales Solutions →</button>
        <button className="service-pill">Marketing & Communication →</button>

        <button className="service-pill center">
          Accounts & Finance Automation →
        </button>

        <button className="service-pill center">Book For Demo →</button>
      </div>
    </section>
  );
};

export default Services;
