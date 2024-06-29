import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNode,
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faGithub,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import Pr1 from "../images/Projects/Project1.jpg";
import Pr2 from "../images/Projects/Project2.png";
import Pr3 from "../images/Projects/Project3.png";
import Pr4 from "../images/Projects/Project4.png";
import Pr5 from "../images/Projects/Project5.png";
import Pr6 from "../images/Projects/Project6.png";
import Pr7 from "../images/Projects/Project7.png";
import Pr8 from "../images/Projects/Project8.png";
import Pr9 from "../images/Projects/Project9.png";
import Pr10 from "../images/Projects/Project10.png";
import prFavicon from "../images/project.png";

const technologyIcons = {
  "React JS": { icon: faReact, color: "#009ac0" },
  "Node JS": { icon: faNode, color: "#68A063" },
  "HTML": { icon: faHtml5, color: "#E44D26" },
  "CSS": { icon: faCss3Alt, color: "#264DE4" },
  "JavaScript": { icon: faJs, color: "#EFD81D" },
  "Bootstrap": { icon: faBootstrap, color: "#40236b" },
  "Database": { icon: faDatabase, color: "#4DB33D" },
  "Github": { icon: faGithub, color: "#000000" },
  "Php": { icon: faPhp, color: "#777BB4" },
  "Firebase": { icon: faDatabase, color: "#FFCA28" }
};

export default function MyPortfolio() {
  const portfolioData = [
    {
      title: "Campus Management System",
      description:
        "A comprehensive system for managing various aspects of campus life, including student information, course registration, and administrative tasks.",
      technologies: ["React JS", "Node JS", "Database","Github"],
      src: Pr1,
      link: "https://github.com/Sananali01/Campus-Management-System",
    },
    {
      title: "Lofty Logix",
      description:
        "Lofty Logix is a state-of-the-art logistics management system designed to streamline operations and enhance efficiency.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      src: Pr2,
      link: "https://lofty-logix.vercel.app/",
    },
    {
      title: "Game Verse",
      description:
        "Game Verse is a comprehensive platform for gamers, featuring the latest news, reviews, and community forums.",
      technologies: ["React JS", "Bootstrap"],
      src: Pr3,
      link: "https://game-verse-react.vercel.app/",
    },
    {
      title: "POS",
      description:
        "POS is a modern point-of-sale system tailored for small businesses, offering seamless transactions and inventory management.",
      technologies: ["React JS", "Bootstrap", "Node JS"],
      src: Pr4,
      link: "https://bakery-hazel.vercel.app/",
    },
    {
      title: "Lofty Logix Portfolio",
      description:
        "A detailed portfolio showcasing the various projects and achievements of Lofty Logix.",
      technologies: ["React JS"],
      src: Pr5,
      link: "https://loftylogix.com/",
    },
    {
      title: "Anime Fusion",
      description:
        "Anime Fusion is a platform dedicated to anime enthusiasts, featuring the latest episodes, reviews, and forums.",
      technologies: ["React JS", "Firebase"],
      src: Pr6,
      link: "https://anime-fusion-web.vercel.app/",
    },
    {
      title: "Knowledge Tree",
      description:
        "Knowledge Tree is an educational platform providing resources and tutorials across various subjects.",
      technologies: ["React JS", "Bootstrap"],
      src: Pr7,
      link: "https://knowledge-tree-web.vercel.app/",
    },
    {
      title: "Clatter Cloud",
      description:
        "Clatter Cloud is a cloud-based communication tool designed for teams to collaborate efficiently.",
      technologies: ["HTML", "CSS"],
      src: Pr8,
      link: "https://clatter-cloud.netlify.app/",
    },
    {
      title: "Ticket Selling",
      description:
        "A streamlined platform for buying and selling event tickets with ease.",
      technologies: ["HTML", "CSS"],
      src: Pr9,
      link: "https://ticket-landing-page.netlify.app/",
    },
    {
      title: "Coin Sensei",
      description:
        "CoinSensei.co is a cutting-edge cryptocurrency educational platform, offering expert insights and tutorials to empower individuals in the dynamic world of digital assets.",
      technologies: ["React JS","Php"],
      src: Pr10,
      link: "https://www.coinsensei.co/",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Projects | Your Name</title>
        <link rel="icon" type="image/png" href={prFavicon} />
      </Helmet>
      <section className="portfolio-section" id="MyPortfolio">
        <div className="portfolio-container">
          <h1 className="section-heading">My Projects</h1>
          <p className="section-subheading">
            Explore some of my projects that showcase my skills and expertise.
          </p>
        </div>
        <div className="portfolio-grid">
          {portfolioData.map((item, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-img">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
                <div className="portfolio-technologies">
                  <strong>Technologies:</strong>
                  {item.technologies.map((tech, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={technologyIcons[tech].icon}
                      title={tech}
                      style={{ color: technologyIcons[tech].color, fontSize: "xx-large", margin: "0 8px" }}
                      className="technology-icon"
                    />
                  ))}
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                >
                  <FontAwesomeIcon icon={faLink} /> Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
