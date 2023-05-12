import React from "react";
import { Link } from "react-scroll";

export default function Header({ language }) {
  return (
    <div className="my-headr-cont">
      <div className="my-header-container">
        <h1 className="my-logo">F</h1>
        <div className="header-nav">
          {language === "en" ? (
            <Link to="skillsScroll" smooth={true} duration={700}>
              <h5>Skills</h5>
            </Link>
          ) : (
            <Link to="skillsScroll" smooth={true} duration={700}>
              <h5>Skills</h5>
            </Link >
          )}
          {language === "en" ? (
            <Link to="projectsScroll" smooth={true} duration={700}>
              <h5>Project</h5>
            </Link>
          ) : (
            <Link to="projectsScroll" smooth={true} duration={700}>
              <h5>Project</h5>
            </Link>
          )}
          {language === "en" ? (
            <Link to="contactScroll" smooth={true} duration={1000}>
              <h4 className="background">Contact Me</h4>
            </Link>
          ) : (
            <Link to="contactScroll" smooth={true} duration={1000}>
              <h4 className="background">Contact Me</h4>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}