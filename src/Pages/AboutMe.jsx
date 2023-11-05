import React, { useState, useEffect } from "react";
import image from "../images/about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from 'react-helmet';
import aboutFavicon from "../images/ab.png"


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

        if (years >= 5) {
          clearInterval(interval);
        }
      }, 40);

      const interval2 = setInterval(() => {
        projects++;
        setCompletedProjects(projects);

        if (projects >= 25) {
          clearInterval(interval2);
        }
      }, 40);

      const interval3 = setInterval(() => {
        customers++;
        setHappyCustomers(customers);

        if (customers >= 50) {
          clearInterval(interval3);
        }
      }, 40);

      const interval4 = setInterval(() => {
        awards++;
        setAwardsWon(awards);

        if (awards >= 3) {
          clearInterval(interval4);
        }
      }, 40);
    };

    simulateLoading();
  }, []);

  return (
    <>
      <Helmet>
        <title> About Me </title>
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
                  <span className="custom-info-title">Full Name:</span> Sanan
                  Ali
                </li>
                <li>
                  <span className="custom-info-title">Age:</span> 21 Years
                </li>
                <li>
                  <span className="custom-info-title">Nationality:</span>{" "}
                  Pakistani
                </li>
                <li>
                  <span className="custom-info-title">Email:</span>{" "}
                  sananali010@gmail.com
                </li>
                <li>
                  <span className="custom-info-title">Location:</span> Lahore,
                  Pakistan
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
                I'm a Pakistan-based Web Designer and Front-end Developer with a
                mission to create clean and user-friendly experiences. I am
                passionate about crafting excellent software that not only
                enhances the digital world but also improves the lives of those
                it touches.
              </p>
              <p className="about--section--description">
                As a MERN stack developer, I thrive on building dynamic and
                responsive web applications that seamlessly integrate the power
                of MongoDB, Express, React, and Node.js. Whether it's designing
                elegant user interfaces or developing robust back-end systems,
                I'm dedicated to bringing innovative ideas to life. Let's
                collaborate and turn your digital vision into a reality that
                leaves a lasting impact.
              </p>
            </div>
          </div>
          <div className="about--section--img">
            <img src={image} alt="About Me" />
          </div>
        </section>
        <section
          id="EducationExperience"
          className="education-experience--section"
        >
          <h1 className="education-experience--main-title">
            Education & Experience
          </h1>
          <div className="education-experience--box">
            <div className="education-experience--column">
              <div className="education-experience--item">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>

                <p className="item-details">
                  <span className="span">Degree:</span> Bachelors in Computer
                  Science
                  <br />
                  <span className="span">University:</span> PMAS Arid
                  Agriculture University
                  <br />
                  <span className="span">Year:</span> 2020-2024
                </p>
              </div>
              <div className="education-experience--item">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <p className="item-details">
                  <span className="span">Intermediate:</span> F.Sc
                  Pre-Engenieering
                  <br />
                  <span className="span">College:</span> Govt.Shalimar College
                  <br />
                  <span className="span">Year:</span> 2018-2020
                </p>
              </div>
            </div>
            <div className="education-experience--column">
              <div className="education-experience--item">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <p className="item-details">
                  <span className="span">Position:</span> Front-End Developer
                  <br />
                  <span className="span">Company:</span> Lofty Logix.
                  <br />
                  <span className="span">Year:</span> 2023
                  <br />
                  <span className="span">Description:</span> Worked On Different
                  Web Frameworks Like React.Js, Bootstrap, Javscript, HTML5,
                  CSS3 .
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
