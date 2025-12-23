import "../styles/MarketingCommunication.css";

const MarketingCommunication = () => {
  return (
    <section className="marketing">
      <div className="marketing-container">
        {/* Title */}
        <h1 className="marketing-title">Marketing & Communication</h1>

        {/* List */}
        <div className="marketing-list">
          <div className="marketing-item">
            <span>01</span>
            <p>
              <strong>Social media & email automation</strong> – Manage marketing
              campaigns without switching platforms.
            </p>
          </div>

          <div className="marketing-item">
            <span>02</span>
            <p>
              <strong>Ad performance tracking</strong> – Get real-time insights
              into your paid marketing efforts.
            </p>
          </div>

          <div className="marketing-item">
            <span>03</span>
            <p>
              <strong>Meeting & webinar hosting</strong> – Schedule, manage, and
              conduct events directly from Teams.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="marketing-buttons">
          <button className="marketing-btn">Book For Demo</button>
          <button className="marketing-btn">Go To Home Page</button>
        </div>
      </div>
    </section>
  );
};

export default MarketingCommunication;
