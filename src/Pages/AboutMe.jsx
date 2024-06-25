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
      </section>

    </>
  );
}
