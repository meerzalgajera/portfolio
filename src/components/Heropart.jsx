import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Heropart.css";
import wave from "../assets/wave-icon.svg";
import banner from "../assets/banner-img.png";
import email from "../assets/mail-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Heropart = () => {
  return (
    <section className="hero">
      <Container className="hero-container">
        <Row className="g-0 align-items-center">
          {/* LEFT CONTENT */}
          <Col lg={6} className="hero-left">
            <div className="hero-top">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="resume-btn">
                  Download PDF Resume
                </Button>
              </a>
            </div>

            <h1 className="hero-title">
              I'm Meerzal
              <span className="wave">
                <img src={wave} alt="wave" className="wave-icon" />
              </span>
            </h1>

            <h2 className="hero-subtitle">Frontend Developer</h2>

            <p className="hero-desc">
              I am a final year IMSC.CIT student and aspiring Full Stack
              Developer with hands-on experience in building modern web
              interfaces using React.js, Bootstrap, and CSS. I am eager to
              apply my skills in real-world projects and grow as a professional
              developer.
            </p>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6} className="hero-right">
            <img src={banner} alt="banner" />
          </Col>
        </Row>

        {/* BOTTOM ROW */}
        <Row className="hero-bottom">
          <Col lg={9} className="email-col">
            <img src={email} alt="email" />

            <a
              href="mailto:gajerameerzal@gmail.com"
              className="email-text email"
             
            >
              gajerameerzal@gmail.com
            </a>
          </Col>


          <Col lg={3} className="social-col">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/gajera-meerzal-8b341b24a"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon orenge"
              style={{ color: "black" }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mirjal.__.147"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon orenge"
              style={{ marginRight: "50px", color: "black" }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Heropart;
