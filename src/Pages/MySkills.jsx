import React from "react";
import { Helmet } from 'react-helmet';
import htmlImage from "../images/Skills/html.png";
import cssImage from "../images/Skills/css.png";
import bootstrapImage from "../images/Skills/boostrap.png";
import javascriptImage from "../images/Skills/js.png";
import reactImage from "../images/Skills/react.png";
import reduxImage from "../images/Skills/redux.png";
import nodeImage from "../images/Skills/node.png";
import muiImage from "../images/Skills/mui.png";
import jqueryImage from "../images/Skills/Jquery.png";
import githubImage from "../images/Skills/github.png";
import expressImage from "../images/Skills/express.png";
import mongodbImage from "../images/Skills/mongodb.png";
import skillsFavicon from '../images/skill.png';

export default function MySkills() {
  // Define the data within the component
  const skillsData = [
    {
      title: "HTML",
      src: htmlImage,
    },
    {
      title: "CSS",
      src: cssImage,
    },
    {
      title: "JavaScript",
      src: javascriptImage,
    },
    {
      title: "Bootstrap",
      src: bootstrapImage,
    },
    {
      title: "jQuery",
      src: jqueryImage,
    },
    {
      title: "React JS",
      src: reactImage,
    },

    {
      title: "Redux",
      src: reduxImage,
    },
    {
      title: "Material-UI",
      src: muiImage,
    },
    {
      title: "Node JS",
      src: nodeImage,
    },
    {
      title: "Express JS",
      src: expressImage,
    },

    {
      title: "MongoDB",
      src: mongodbImage,
    },
    {
      title: "GitHub",
      src: githubImage,
    },
  ];

  return (
    <>
    <Helmet>
        <title> Skills | Sanan Ali </title>
        <link rel="icon" type="image/png" href={skillsFavicon} />
      </Helmet>
      <section className="skills--section" id="mySkills">
        <h1 className="skill-title">Skills</h1>
        <div className="skills--section--container">
          {skillsData.map((item, index) => (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
