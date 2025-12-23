import "../styles/BeamSetup.css";

const BeamSetup = () => {
  return (
    <section id="beam-setup" className="beam">
      <div className="beam-container">
        {/* Title */}
        <h1 className="beam-title">
          Beam Setup (Teams
          <br />
          Architecture & Management)
        </h1>

        {/* List */}
        <div className="beam-list">
          <div className="beam-item">
            <span>01</span>
            <p>
              <strong>Customized Teams structure</strong> – We create structured
              channels and workspaces to improve communication.
            </p>
          </div>

          <div className="beam-item">
            <span>02</span>
            <p>
              <strong>Security and access control</strong> – Proper permission
              settings ensure data safety and confidentiality.
            </p>
          </div>

          <div className="beam-item">
            <span>03</span>
            <p>
              <strong>Automated workflows</strong> – Reduce manual work by
              automating approvals and routine tasks.
            </p>
          </div>

          <div className="beam-item">
            <span>04</span>
            <p>
              <strong>Third-party tool integration</strong> – Connect your
              essential business apps directly with Teams.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="beam-buttons">
          <button className="beam-btn">Book For Demo</button>
          <button className="beam-btn">Go To Home Page</button>
        </div>
      </div>
    </section>
  );
};

export default BeamSetup;
