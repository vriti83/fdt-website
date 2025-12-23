import "../styles/WhatWeDo.css";
import teamsImage from "../assets/teams.png"; // placeholder image

const WhatWeDo = () => {
  return (
    <section className="whatwedo">
      <div className="whatwedo-container">

        {/* LEFT */}
        <div className="whatwedo-left">
          <h2 className="section-title">
            What We <span>DO</span> ?
          </h2>

          <p className="whatwedo-text">
            <strong>fDT</strong> specializes in setting up and optimizing
            Microsoft Teams for businesses of all sizes. We integrate HR
            automation, ERP, RPA, CRM, and other business processes within
            Teams, streamlining workflows and maximizing efficiency.
          </p>
        </div>

        {/* RIGHT */}
        <div className="whatwedo-right">
          <h2 className="section-title">
            Why <span>fDT</span> ?
          </h2>

          <ul className="checklist">
            <li>Tailored Teams setup for your business.</li>
            <li>Automated workflows for HR, sales, and finance.</li>
            <li>Seamless integration of ERP and RPA solutions.</li>
            <li>Full-scale CRM, marketing, and task management.</li>
          </ul>

          <img
            src={teamsImage}
            alt="Microsoft Teams Illustration"
            className="whatwedo-image"
          />
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
