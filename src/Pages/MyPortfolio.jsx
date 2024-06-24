import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faShare } from "@fortawesome/free-solid-svg-icons";
import Pr1 from "../images/Projects/Project1.png";
import Pr2 from "../images/Projects/Project2.png";
import Pr3 from "../images/Projects/Project3.png";
import Pr4 from "../images/Projects/Project4.png";
import Pr5 from "../images/Projects/Project5.png";
import Pr6 from "../images/Projects/Project6.png";
import Pr7 from "../images/Projects/Project7.png";
import Pr8 from "../images/Projects/Project8.png";
import Pr9 from "../images/Projects/Project9.png";
import Pr10 from "../images/Projects/Project10.png";

import { Helmet } from "react-helmet";
import prFavicon from "../images/project.png"

export default function MyPortfolio() {
  const portfolioData = [
    {
      title: "Coin Sensei",
      description:
        "CoinSensei.co is a cutting-edge cryptocurrency educational platform, offering expert insights and tutorials to empower individuals in the dynamic world of digital assets.",
      src: Pr1,
      link: "https://www.coinsensei.co/",
    },
    {
      title: "Lofty Logix",
      src: Pr2,
      link: "https://lofty-logix.vercel.app/",
    },
    {
      title: "Game Verse",
      src: Pr3,
      link: "https://game-verse-react.vercel.app/",
    },
    {
      title: "POS",
      description:
        "CoinSensei.co is a cutting-edge cryptocurrency educational platform, offering expert insights and tutorials to empower individuals in the dynamic world of digital assets.",
      src: Pr4,
      link: "https://bakery-hazel.vercel.app/",
    },
    {
      title: "Lofty Logix Portfolio",
      src: Pr5,
      link: "https://loftylogix.com/",
    },
    {
      title: "Anime Fusion",
      src: Pr6,
      link: "https://anime-fusion-web.vercel.app/",
    },
    {
      title: "Knowledge Tree",
      src: Pr7,
      link: "https://knowledge-tree-web.vercel.app/",
    },
    {
      title: "Clatter Cloud",
      src: Pr8,
      link: "https://clatter-cloud.netlify.app/",
    },
    {
      title: "Ticket Selling",
      src: Pr9,
      link: "https://ticket-landing-page.netlify.app/",
    },
    {
      title: "Ecommerce Shop",
      src: Pr10,
      link: "https://store-shop-mauve.vercel.app/",
    },
    // Add more projects here
  ];


  return (
    <>
    <Helmet>
    <title>     Projects | Sanan Ali     </title>
    <link rel="icon" type="image/png" href={prFavicon} />
    </Helmet>
      <section className="portfolio--section" id="MyPortfolio">
        <div className="portfolio--container">
          <h1 className="section--heading">My Portfolio</h1>
          <button className="btn-cssbuttons">
                <a href="https://github.com/Sananali01">
                  Visit my Github <FontAwesomeIcon icon={faGithub} />
                </a>
          </button>

        </div>
        <div className="portfolio--section--container">
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className="portfolio--section--card"
              data-aos="fade-up"
            >
              <div className="portfolio--section--img">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title">{item.title}</h3>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm portfolio--link"
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
