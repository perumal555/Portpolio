import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from '../assets/bootstrap.png'
import js from "../assets/js.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import django from "../assets/dj.png";

const skills = [
  { name: "HTML5", img: html, percentage: "100%", className: "html" },
  { name: "CSS", img: css, percentage: "100%", className: "css" },
  { name: "Bootstrap", img: bootstrap, percentage: "100%", className: "bootstrap" },
  { name: "JavaScript", img: js, percentage: "65%", className: "js" },
  { name: "Node.js", img: node, percentage: "80%", className: "node" },
  { name: "Python", img: python, percentage: "55%", className: "python" },
  { name: "Django", img: django, percentage: "65%", className: "django" },
];

const professionalSkills = [
  { name: "Creativity", percentage: 75, className: "path-1" },
  { name: "Problem Solving", percentage: 70, className: "path-2" },
  { name: "Communication", percentage: 60, className: "path-3" },
  { name: "Teamwork", percentage: 80, className: "path-4" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <h2
        data-aos="zoom-in"
        className="text-light text-center mt-5"
        style={{ color: "white" }}
      >
        My <span style={{ color: "#0ef" }}>Skills</span>
      </h2>

      <Container>
        <Row>
          <Col lg={4} md={6}>
            <div className="cantainer-1" id="skills">
              <h4 data-aos="zoom-out-up">Technical Skills</h4>
            </div>
            <div className="text-light tech-bar">
              {skills.map((skill, index) => (
                <div className="technical" key={index}>
                  <img
                    src={skill.img}
                    alt={skill.name}
                    style={{ width: "40px" }}
                  />
                  <h6>{skill.name}</h6>
                  <div className={`progress-line ${skill.className}`}>
                    <span
                      style={{ "--progress-width": skill.percentage }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={8} md={6}>
            <div className="cantainer-2" id="skills">
              <h4 data-aos="zoom-out">Professional Skills</h4>
            </div>
            <div className="radial-bars">
              {professionalSkills.map((skill, index) => (
                <div className="radial-bar" key={index}>
                  <svg viewBox="0 0 200 200">
                    <circle
                      className="progress-bar"
                      cx="100"
                      cy="100"
                      r="80"
                    ></circle>
                    <circle
                      className={`path ${skill.className}`}
                      cx="100"
                      cy="100"
                      r="80"
                      style={{ "--percentage": skill.percentage }}
                    ></circle>
                  </svg>
                  <div className="percentage">{skill.percentage}%</div>
                  <div className="text">{skill.name}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skills;
