import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import abanner from "../assets/resume-bg-img.svg";
import about from "../assets/about-banner-img.svg";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
    return (
        <section className="about-section">
           

            <Container className="about-container">
                {/* Header */}
                <Row>
                    <Col>
                        <h2 className="about-title">About Me</h2>
                        <div className="about-line" />
                    </Col>
                </Row>

                {/* Content */}
                <Row className="align-items-center">
                    {/* Left Image */}
                    <Col md={4} className="about-img-col">
                        <img src={about} alt="about" className="about-img" />
                    </Col>

                    {/* Right Content */}
                    <Col md={8}>
                        <p className="about-text">
                            I am currently pursuing M.Sc. IT (Final Year – 8th Semester), a
                            4-year program, and I am also enrolled in a Full Stack Development
                            course at Creative Design and Multimedia Institute.
                            <br />
                            <br />
                            I have strong skills in Frontend Development and am proficient in
                            HTML, CSS, JavaScript, and React. I enjoy building responsive,
                            user-friendly, and visually appealing web interfaces with a focus
                            on clean code.
                            <br />
                            <br />
                            I am highly motivated to continuously learn new technologies,
                            improve my development skills, and grow professionally by working
                            on real-world projects.
                        </p>
                        <div className="language-wrapper">
                            <div className="language-title">
                                <span className="lang-icon">
                                    <FontAwesomeIcon icon={faLanguage} />
                                </span>
                                <strong>Language</strong>
                            </div>

                            <span className="lang-btn">English</span>
                            <span className="lang-btn">Gujrati</span>
                            <span className="lang-btn">Hindi</span>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutMe;
