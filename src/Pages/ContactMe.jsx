import React from "react";
import { Helmet } from "react-helmet";
import contactFavicon from "../images/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactMe() {
  return (
    <>
      <Helmet>
        <title>Contact Me | Sanan Ali</title>
        <link rel="icon" type="image/png" href={contactFavicon} />
      </Helmet>
      <section id="Contact" className="contact-section">
        <div className="contact-title-section">
          <p className="sub-title">Get In Touch</p>
        </div>
        <div className="contact-info-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              <span>
                <FontAwesomeIcon icon={faEnvelope} /> Email:
              </span>{" "}
              <a href="mailto:sananali010@gmail.com">sananali010@gmail.com</a>
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faPhoneVolume} /> Phone:
              </span>{" "}
              +92-311-6566223
            </p>
          </div>
          <div className="social-media-icons">
            <h3>Social Media</h3>
            <div className="social-links">
              <a
                href="https://github.com/Sananali01"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faGithub} className="icon" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/_exotic.sanan/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faInstagram} className="icon" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sananali007/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                <span>Linkedin</span>
              </a>
              <a
                href="https://www.facebook.com/SananAli53/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
