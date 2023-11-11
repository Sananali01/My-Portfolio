import resumeFile from "../images/Sanan CV.pdf";
import img from "../images/pic.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import homeFavicon from "../images/home.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Helmet>
        <title> Home </title>
        <link rel="icon" type="image/png" href={homeFavicon} />
      </Helmet>
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Sanan Ali</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Mern Stack</span> <br />
              Developer
            </h1>
          </div>
          <br />
          <Link to="/ContactMe" className="button2">
            Hire Now
          </Link>
          &nbsp; &nbsp; &nbsp;
          <a href={resumeFile} download style={{ textDecoration: "none" }}>
            <button className="button">Download Resume</button>
          </a>
          <br/>
          <div className="social-icons">
              <a href="https://www.linkedin.com/in/sananali007/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/Sananali01" target="_blank" >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
        </div>


        <div className="hero--section--img">
          <img src={img} alt="Hero Section" />
        </div>
      </section>
    </>
  );
}
