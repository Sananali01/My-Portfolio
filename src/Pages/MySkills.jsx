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
import githubImage from "../images/Skills/github.png";
import mongodbImage from "../images/Skills/mongodb.png";
import vscodeImage from "../images/Skills/vscode.png";
import npmImage from "../images/Skills/npm.png";
import gitImage from "../images/Skills/git.png";
import skillsFavicon from '../images/skill.png';
import figmaImage from "../images/Skills/figma.png";


export default function MySkills() {
  const technologies = [
    { title: "HTML", src: htmlImage },
    { title: "CSS", src: cssImage },
    { title: "JavaScript", src: javascriptImage },
    { title: "Bootstrap", src: bootstrapImage },
    { title: "React JS", src: reactImage },
    { title: "Redux", src: reduxImage },
    { title: "Material-UI", src: muiImage },
    { title: "Node JS", src: nodeImage },
    { title: "MongoDB", src: mongodbImage },
  ];

  const tools = [
    { title: "GitHub", src: githubImage },
    { title: "Visual Studio Code", src: vscodeImage },
    { title: "NPM", src: npmImage },
    { title: "Git", src: gitImage },
    { title: "Figma", src: figmaImage },
  ];

  return (
    <>
      <Helmet>
        <title>Skills | Sanan Ali</title>
        <link rel="icon" type="image/png" href={skillsFavicon} />
      </Helmet>
      <section className="skills--section" id="mySkills">
        <div className="skills--section--container">
        <h2>Tools</h2>
        <div className="skills--section--subcategory">
            {tools.map((item, index) => (
              <div key={index} className="skills--section--card">
                <img src={item.src} alt={item.title} />
                <h3 className="skills--section--title">{item.title}</h3>
              </div>
            ))}
          </div>
          <h2>Technologies</h2>
          <div className="skills--section--subcategory">
            {technologies.map((item, index) => (
              <div key={index} className="skills--section--card">
                <img src={item.src} alt={item.title} />
                <h3 className="skills--section--title">{item.title}</h3>
              </div>
            ))}
          </div>
    
          
        </div>
      </section>
    </>
  );
}
