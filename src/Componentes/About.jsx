import React, { useEffect } from 'react'
import pic from '../assets/zeb.gif'
import AOS from "aos";
import "aos/dist/aos.css";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function About() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <h2 data-aos="zoom-in" className='text-light text-center mt-5'>About <span>Me</span></h2>

      <Container className="about-container">
        <Row className="align-items-center">
          <Col md={6} className="text-center" data-aos="zoom-in">
            <div className="about">
              <img src={pic} alt="Profile" className="profile-pic" />
            </div>
          </Col>

          <Col md={6} data-aos="zoom-in">
            <div className="about_me">
              <h4 className="text-light">Full Stack Developer!</h4>
              <p className="text-light description">
                Hi, I'm <b>Narasinga Perumal</b>, a passionate full-stack developer skilled in HTML, CSS, and Bootstrap for crafting responsive and visually appealing interfaces. On the backend, I work with Node.js to build robust applications, while MongoDB helps me manage data efficiently. Constantly learning and exploring new technologies, I aim to develop scalable, high-performance web solutions.
              </p>
              <a href="#"><button className="btn1">More About Me</button></a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About
