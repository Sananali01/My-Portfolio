import React from "react";
import { Helmet } from "react-helmet";
import contactFavicon from "../images/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faYoutube,
  faPinterest,
  faTiktok,
  faSnapchat
} from '@fortawesome/free-brands-svg-icons';

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
            <div>
              <h3>Drop Us a Mail</h3>
              <p>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} /> Email:
                </span>{" "}
                <a href="mailto:sananali010@gmail.com">sananali010@gmail.com</a>
              </p>
            </div>
            <div>
              <h3>Call Us</h3>
              <p>
                <span>
                  <FontAwesomeIcon icon={faPhoneVolume} /> Phone:
                </span>{" "}
                +92-311-6566223
              </p>
            </div>
            <div className="social-media">
              <h2>Follow Us on Social Media</h2>
              <a className="btn facebook" href="https://www.facebook.com/SananAli53/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a className="btn instagram" href="https://www.instagram.com/_exotic.sanan/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a className="btn github" href="https://github.com/Sananali01" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a className="btn google" href="mailto:sananali010@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGoogle} />
              </a>

              <a className="btn linkedin" href="https://www.linkedin.com/in/sananali007/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <div className="contact-form-container">
            <h3>Contact Us</h3>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Enter your Name" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Enter your Email"/>

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Enter your Message"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

      </section>
    </>
  );
}
