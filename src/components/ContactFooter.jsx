import "../styles/ContactFooter.css";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function ContactFooter() {
  return (
    <section className="contact-footer">
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">
          <h1>
            Make <br />
            your <br />
            <span>mark.</span>
          </h1>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <div className="contact-top">
            <div className="line" />
            <p className="work-with">WORK<br />WITH US</p>
          </div>

          <a
            href="mailto:ferp.work@gmail.com"
            className="contact-link"
          >
            ferp.work@gmail.com
          </a>

          <a href="tel:+918130258372" className="contact-link">
            +91-8130258372
          </a>

          <a href="tel:+917527028372" className="contact-link">
            +91-7527028372
          </a>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <a
              href="https://instagram.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://facebook.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/fdt-solutions/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
