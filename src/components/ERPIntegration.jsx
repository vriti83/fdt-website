import "../styles/ERPIntegration.css";

const ERPIntegration = () => {
  return (
    <section id="erp-integration" className="erp">
      <div className="erp-container">
        {/* Title */}
        <h1 className="erp-title">ERP Integration</h1>

        {/* List */}
        <div className="erp-list">
          <div className="erp-item">
            <span>01</span>
            <p>
              <strong>Inventory & supply chain management</strong> – Keep track
              of stock, orders, and deliveries in real time.
            </p>
          </div>

          <div className="erp-item">
            <span>02</span>
            <p>
              <strong>Automated finance & invoicing</strong> – Streamline
              financial operations for accurate and faster transactions.
            </p>
          </div>

          <div className="erp-item">
            <span>03</span>
            <p>
              <strong>Real-time data insights</strong> – Custom dashboards
              provide business intelligence for decision-making.
            </p>
          </div>

          <div className="erp-item">
            <span>04</span>
            <p>
              <strong>Approval workflows</strong> – Automate procurement and
              expense approvals to enhance efficiency.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="erp-buttons">
          <button className="erp-btn">Book For Demo</button>
          <button className="erp-btn">Go To Home Page</button>
        </div>
      </div>
    </section>
  );
};

export default ERPIntegration;
