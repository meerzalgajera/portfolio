import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import educ from "../assets/edu-skill-vector.svg";
import "./Education.css";

function Education() {
  return (
    <section className="education-section">
      <Container>
        {/* HEADER */}
        <Row>
          <Col>
            <div className="education-header-wrapper">
              {/* BACKGROUND LOGO */}
              <img
                src={educ}
                alt="Education Logo"
                className="education-bg-logo"
              />

              {/* TITLE */}
              <h2 className="education-title">Education</h2>
            </div>

            {/* LINE */}
            <div className="education-line"></div>
          </Col>
        </Row>

        {/* CONTENT */}
        <Row className="education-content">
          <Col lg={8} md={10} sm={12}>
            <div className="education-item">
              <span className="education-dot"></span>

              <div className="education-text">
                <h4>Silver oak University - 2023</h4>
                <p>
                  Integrated M.Sc. ( IT ) student , currently in the final year of study. Gaining comprehensive knowledge in information technology through coursework, hands-on projects, and practical learning focused on software development and emerging technologies.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Education;
    