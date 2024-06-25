import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from 'react-helmet';
import aboutFavicon from "../images/ab.png"
import { faMapMarkerAlt,faBuilding , faLaptop, faUniversity, faGraduationCap} from '@fortawesome/free-solid-svg-icons';



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
      <h1 className="about--section--title">ABOUT ME</h1>
      <section className="about-section">
        <section id="AboutMe" className="about--section">
          <div className=" about--section--box">
            <div className="about--section--content">

              <p className="about--section--description">
                I'm a Web Designer and Front-end Developer with a mission to create clean and user-friendly experiences. I am passionate about crafting excellent software that not only enhances the digital world but also improves the lives of those it touches.
              </p>
              <p className="about--section--description">
                As a MERN stack developer, I thrive on building dynamic and responsive web applications that seamlessly integrate the power of MongoDB, Express, React, and Node.js. Whether it's designing elegant user interfaces or developing robust back-end systems, I'm dedicated to bringing innovative ideas to life. Let's collaborate and turn your digital vision into a reality that leaves a lasting impact.
              </p>
            </div>
          </div>

        </section>

<section id="Experience" className="about--section">
          <div className="about--section--box">
            <h2 className="about--section--title">Experience</h2>
            <div className="about--section--content">
              <div className="experience--item">
                <h3 className="experience--title">React JS Developer</h3>
                <p className="experience--details">
                <FontAwesomeIcon icon={faBuilding} /> Lofty Logix <span style={{float:"inline-end"}}>
                   <FontAwesomeIcon icon={faMapMarkerAlt} /> Johar Town, Lahore</span>
                  <br /><br />
                  June 2023 - March 2024
                  <span style={{float:"inline-end"}}>Full-time</span>
                </p>
              </div>
              <div className="experience--item">
                <h3 className="experience--title">Front-End Developer</h3>
                <p className="experience--details">
                <FontAwesomeIcon icon={faBuilding} /> Tech Cloud 
                <span style={{float:"inline-end"}}> <FontAwesomeIcon icon={faLaptop} /> Remote Job</span>
                  <br /><br />
                  July 2022 - October 2022
                  <span style={{float:"inline-end"}}>Full-time</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="Education" className="about--section">
          <div className="about--section--box">
            <h2 className="about--section--title">Education</h2>
            <div className="about--section--content">
              <div className="education--item">
                <h3 className="education--title">Bachelor's Degree - Computer Science</h3>
                <p className="education--details">
                <FontAwesomeIcon icon={faUniversity}/> PMAS Arid University<span style={{float:"inline-end"}}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Garden Town, Lahore</span>
                  <br /><br />
                  Graduated: July 2024
                  <span style={{float:"inline-end"}}>4 Years</span>
                </p>
              </div>
              <div className="education--item">
                <h3 className="education--title">FSc Pre-Engineering</h3>
                <p className="education--details">
                <FontAwesomeIcon icon={faGraduationCap}/> Govt.Shalimar College <span style={{float:"inline-end"}}>
                 <FontAwesomeIcon icon={faMapMarkerAlt} /> Shalimar, Lahore</span>
                  <br /><br />
                  Completed: May 2020
                  <span style={{float:"inline-end"}}>2 Years</span>
                </p>
              </div>
            </div>
          </div>
        </section>

      </section>
    </>
  );
}
