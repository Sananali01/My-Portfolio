import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faTools,
  faUser,
  faEnvelope,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const location = useLocation();
  const [navActive, setNavActive] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setShowServices(false);
      } else {
        setShowServices(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check for viewport width on component mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <Link to="/">
        <img className="logo-img" src={logo} alt="Logoipsum" />
      </Link>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link onClick={closeMenu} to="/" className="navbar--content">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li className={location.pathname === "/MyPortfolio" ? "active" : ""}>
            <Link
              onClick={closeMenu}
              to="/MyPortfolio"
              className="navbar--content"
            >
              <FontAwesomeIcon icon={faBriefcase} /> Portfolio
            </Link>
          </li>
          <li className={location.pathname === "/MySkills" ? "active" : ""}>
            <Link
              onClick={closeMenu}
              to="/MySkills"
              className="navbar--content"
            >
              <FontAwesomeIcon icon={faTools} /> Skills
            </Link>
          </li>
          <li className={location.pathname === "/AboutMe" ? "active" : ""}>
            <Link onClick={closeMenu} to="/AboutMe" className="navbar--content">
              <FontAwesomeIcon icon={faUser} /> About Me 
            </Link>
          </li>
          <li className={location.pathname === "/BlogPage" ? "active" : ""}>
            <Link
              onClick={closeMenu}
              to="/BlogPage"
              className="navbar--content"
            >
              <FontAwesomeIcon icon={faBlog} /> Blog
            </Link>
          </li>
        </ul>
        {showServices && (
            <li className={location.pathname === "/ContactMe" ? "active" : ""}>
              <Link
                onClick={closeMenu}
                to="/ContactMe"
                className="contact-button"
              >
               <FontAwesomeIcon icon={faEnvelope} /> Contact Me
              </Link>
            </li>
          )}
      </div>

      <Link onClick={closeMenu} to="/ContactMe" className="box">
        <FontAwesomeIcon icon={faEnvelope} /> Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
