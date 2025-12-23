import "../styles/AboutUs.css";
import aboutImage from "../assets/about-image.png";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT COLUMN */}
        <div className="about-left">
          <h1 className="about-title">About Us</h1>

          <h2 className="about-subtitle">Our Vision</h2>

          <p className="about-text">
            <strong>At fDT</strong><br />
            we believe digital transformation should be accessible to all
            businesses, big or small. Our goal is to optimize workflows,
            automate tasks, and maximize productivity using Microsoft Teams.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="about-right">
          <div className="about-line" />

          <img
            src={aboutImage}
            alt="Microsoft Teams Dashboard"
            className="about-image"
          />

          <h2 className="about-why">Why FDT?</h2>

          <ul className="about-list">
            <li>Expertise in Teams setup, ERP, and automation.</li>
            <li>Scalable solutions for businesses of all sizes.</li>
            <li>Dedicated support and seamless integration.</li>
          </ul>
        </div>

      </div>

      {/* BUTTONS */}
      <div className="about-buttons">
        <button className="about-btn">Book For Demo</button>
        <button className="about-btn">Go To Home Page</button>
      </div>
    </section>
  );
};

export default AboutUs;
