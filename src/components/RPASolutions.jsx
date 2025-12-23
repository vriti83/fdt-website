import "../styles/RPASolutions.css";

const RPASolutions = () => {
  return (
    <section className="rpa">
      <div className="rpa-container">
        {/* Title */}
        <h1 className="rpa-title">
          RPA Solutions (Robotic Process
          <br />
          Automation)
        </h1>

        {/* List */}
        <div className="rpa-list">
          <div className="rpa-item">
            <span>01</span>
            <p>
              <strong>AI-powered bots</strong> – Automate repetitive tasks like
              data entry and documentation.
            </p>
          </div>

          <div className="rpa-item">
            <span>02</span>
            <p>
              Automated reporting –{" "}
              <strong>
                Generate accurate business reports without manual effort.
              </strong>
            </p>
          </div>

          <div className="rpa-item">
            <span>03</span>
            <p>
              <strong>AI chatbots for HR & support</strong> – Improve employee
              and customer support with instant AI responses.
            </p>
          </div>

          <div className="rpa-item">
            <span>04</span>
            <p>
              <strong>Document processing automation</strong> – Reduce errors
              by automating paperwork and approvals.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="rpa-buttons">
          <button className="rpa-btn">Book For Demo</button>
          <button className="rpa-btn">Go To Home Page</button>
        </div>
      </div>
    </section>
  );
};

export default RPASolutions;
