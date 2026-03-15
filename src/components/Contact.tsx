import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:ash@robustors.com" data-cursor="disable">
                ash@robustors.com
              </a>
            </p>
            <h4>Company</h4>
            <p><a href="https://www.robustors.com" target="_blank" rel="noopener noreferrer" data-cursor="disable" style={{ color: "inherit", textDecoration: "none" }}>Robustors</a></p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.robustors.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Robustors.com <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/aaqib-munir-8a1b3a192/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://x.com/AaqibMunirT"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              X (Twitter) <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Built and Operated by <span><a href="https://x.com/AaqibMunirT" target="_blank" rel="noopener noreferrer" data-cursor="disable" style={{ color: "inherit", textDecoration: "none" }}>Ash</a></span>
            </h2>
            <h5>
              <MdCopyright /> 2020
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
