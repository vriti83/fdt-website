import "../styles/HRAutomation.css";

const HRAutomation = () => {
  return (
    <section className="hr">
      <div className="hr-container">
        {/* Title */}
        <h1 className="hr-title">HR Automation</h1>

        {/* List */}
        <div className="hr-list">
          <div className="hr-item">
            <span>01</span>
            <p>
              <strong>Automated employee onboarding & exit</strong> – Manage
              hiring and offboarding seamlessly within Teams.
            </p>
          </div>

          <div className="hr-item">
            <span>02</span>
            <p>
              <strong>Leave and attendance tracking</strong> – Simplify
              workforce management with automated tracking.
            </p>
          </div>

          <div className="hr-item">
            <span>03</span>
            <p>
              <strong>Payroll and benefits processing</strong> – Integrated
              payroll management ensures timely payments.
            </p>
          </div>

          <div className="hr-item">
            <span>04</span>
            <p>
              <strong>Performance evaluation</strong> – Monitor and analyze
              employee productivity effortlessly.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="hr-buttons">
          <button className="hr-btn">Book For Demo</button>
          <button className="hr-btn">Go To Home Page</button>
        </div>
      </div>
    </section>
  );
};

export default HRAutomation;
