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
        <title>Contact Me | Sanan Ali </title>
        <link rel="icon" type="image/png" href={contactFavicon} />
      </Helmet>
      <section id="Contact" className="contact-section">
        <div className="contact-title-section">
          <p className="sub-title">Get In Touch</p>
          <h2 className="section-heading">Contact Me</h2>
        </div>
        <div className="contact-info-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              <span>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffc107" }} />&nbsp; Email: 
              </span>
              <a href="mailto:sananali010@gmail.com">sananali010@gmail.com</a>
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#ffc107" }} /> &nbsp;  Phone:{" "}
              </span>
              +92-311-6566223
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faLocationCrosshairs} style={{ color: "#ffc107" }} />&nbsp; 
                Address:
              </span>{" "}
              Ferozpur Road, Lahore, Pakistan
            </p>
          </div>
          <div className="social-media-icons">
            <h3>Social Media </h3>
            <a
              href="https://github.com/Sananali01"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
              &nbsp;
              <span>GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/_exotic.sanan/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon" />&nbsp;
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sananali007/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />&nbsp;
              <span>Linkedin</span>
            </a>
            <a
              href="https://www.facebook.com/SananAli53/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faFacebook} className="icon" />&nbsp;
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
