import "../styles/CRMSales.css";

const CRMSales = () => {
  return (
    <section className="crm">
      <div className="crm-container">
        {/* Title */}
        <h1 className="crm-title">CRM & Sales Solutions</h1>

        {/* Content */}
        <div className="crm-list">
          <div className="crm-item">
            <span>01</span>
            <p>
              <strong>Automated lead tracking</strong> – Capture and nurture
              leads without manual intervention.
            </p>
          </div>

          <div className="crm-item">
            <span>02</span>
            <p>
              <strong>Sales pipeline management</strong> – Monitor deals,
              progress, and conversions in one place.
            </p>
          </div>

          <div className="crm-item">
            <span>03</span>
            <p>
              <strong>Customer support automation</strong> – Respond faster with
              AI chatbots and automated replies.
            </p>
          </div>

          <div className="crm-item">
            <span>04</span>
            <p>
              <strong>Marketing automation</strong> – Schedule and track
              campaigns within Microsoft Teams.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="crm-buttons">
          <button className="crm-btn">Book For Demo</button>
          <button className="crm-btn">Go To Home Page</button>
        </div>
      </div>
    </section>
  );
};

export default CRMSales;
