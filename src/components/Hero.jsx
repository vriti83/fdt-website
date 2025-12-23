import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-logo">fDT</h1>

        <h2 className="hero-title">
          Your First Digital <br />
          Transformation
        </h2>

        <p className="hero-subtitle">
          Empowering businesses with Microsoft Teams for efficiency,
          automation, and growth.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn">Services →</button>
          <button className="hero-btn">Book For Demo →</button>
          <button className="hero-btn">About Us →</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
