import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from 'react-helmet';
import aboutFavicon from "../images/ab.png"
import { faUser, faBirthdayCake, faFlag, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";



export default function Me() {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [awardsWon, setAwardsWon] = useState(0);

  useEffect(() => {
    const simulateLoading = () => {
      let years = 0;
      let projects = 0;
      let customers = 0;
      let awards = 0;

      const interval = setInterval(() => {
        years++;
        setYearsOfExperience(years);

        if (years >= 1) {
          clearInterval(interval);
        }
      }, 40);

      const interval2 = setInterval(() => {
        projects++;
        setCompletedProjects(projects);

        if (projects >= 10) {
          clearInterval(interval2);
        }
      }, 40);

      const interval3 = setInterval(() => {
        customers++;
        setHappyCustomers(customers);

        if (customers >= 3) {
          clearInterval(interval3);
        }
      }, 40);

      const interval4 = setInterval(() => {
        awards++;
        setAwardsWon(awards);

        if (awards >= 2) {
          clearInterval(interval4);
        }
      }, 40);
    };

    simulateLoading();
  }, []);

  return (
    <>
      <Helmet>
        <title> About Me | Sanan Ali </title>
        <link rel="icon" type="image/png" href={aboutFavicon} />
      </Helmet>
      <section className="about-section">
        <section className="custom-section">
          <div className="custom-info">
            <div className="custom-info-header">
              <h3 className="custom-title">Personal Info</h3>
            </div>
            <div className="custom-info-content">
              <ul className="custom-info-list">
                <li>
                  <span className="custom-info-icon">
                    <FontAwesomeIcon icon={faUser} style={{ color: "#000000" }} />
                  </span>
                  &nbsp;
                  <span className="custom-info-title">Full Name:</span> Sanan Ali
                </li>
                <li>
                  <span className="custom-info-icon">
                    <FontAwesomeIcon icon={faBirthdayCake} style={{ color: "#000000" }} />
                  </span>
                  &nbsp;
                  <span className="custom-info-title">Age:</span> 21 Years
                </li>

                <li>
                  <span className="custom-info-icon">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} />
                  </span>
                  &nbsp;
                  <span className="custom-info-title">Email:</span> sananali010@gmail.com
                </li>

              </ul>
            </div>
          </div>

          <div className="custom-stats">
            <div className="box1">
              <div className="custom-stats-box">
                <h3 className="custom-stats-number">{yearsOfExperience}+</h3>
                <p className="custom-stats-text">Years of Experience</p>
              </div>
              <div className="custom-stats-box">
                <h3 className="custom-stats-number">{completedProjects}+</h3>
                <p className="custom-stats-text">Completed Projects</p>
              </div>
            </div>

            <div className="box2">
              <div className="custom-stats-box">
                <h3 className="custom-stats-number">{happyCustomers}+</h3>
                <p className="custom-stats-text">Happy Customers</p>
              </div>
              <div className="custom-stats-box">
                <h3 className="custom-stats-number">{awardsWon}+</h3>
                <p className="custom-stats-text">Awards Won</p>
              </div>
            </div>
          </div>
          {/* Statistics Ends */}
        </section>
        <section id="AboutMe" className="about--section">
          <div className=" about--section--box">
            <div className="about--section--content">
              <h1 className="about--section--title">ABOUT ME</h1>
              <p className="about--section--description">
                I'm a Web Designer and Front-end Developer with a mission to create clean and user-friendly experiences. I am passionate about crafting excellent software that not only enhances the digital world but also improves the lives of those it touches.
              </p>
              <p className="about--section--description">
                As a MERN stack developer, I thrive on building dynamic and responsive web applications that seamlessly integrate the power of MongoDB, Express, React, and Node.js. Whether it's designing elegant user interfaces or developing robust back-end systems, I'm dedicated to bringing innovative ideas to life. Let's collaborate and turn your digital vision into a reality that leaves a lasting impact.
              </p>
            </div>
          </div>
 
        </section>
      </section>

    </>
  );
}
