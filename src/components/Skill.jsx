import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skill.css';

import skill from "../assets/edu-skill-vector.svg";
import html from '../assets/html.webp';
import css from '../assets/css.webp';
import bootstrap from '../assets/bootstrap.webp';
import javascript from '../assets/javascript.webp';
import reactjs from '../assets/reactjs.webp';
import jquery from '../assets/jquery.webp';
import c from '../assets/c.webp';
import cpp from '../assets/c++.webp';

function Skill() {
  return (
    <section id="skills" className="skill-section">
      <Container>

        {/* ===== HEADER ===== */}
        <Row>
          <Col>
            <div className="skill-header-wrapper">
              {/* BACKGROUND LOGO */}
              <img
                src={skill}
                alt="skill Logo"
                className="skill-bg-logo"
              />

              {/* TITLE */}
              <h2 className="skill-title">Skills</h2>
            </div>

            {/* LINE */}
            <div className="skill-line"></div>
          </Col>
        </Row>

        {/* ===== SKILLS GRID ===== */}
        <Row className="g-4">

          <Col md={4} sm={6} xs={12}>
            <div className="skill-card">
              <img src={html} alt="HTML" className="skill-img" />
              <h5>HTML5</h5>
              <div className="dots">
                <span className="active"></span><span className="active"></span>
                <span className="active"></span><span className="active"></span>
                <span className="active"></span>
              </div>
            </div>
          </Col>

          <Col md={4} sm={6} xs={12}>
            <div className="skill-card">
              <img src={css} alt="CSS" className="skill-img" />
              <h5>CSS3</h5>
              <div className="dots">
                <span className="active"></span><span className="active"></span>
                <span className="active"></span><span className="active"></span>
                <span className="active"></span>
              </div>
            </div>
          </Col>

          <Col md={4} sm={6} xs={12}>
            <div className="skill-card">
              <img src={bootstrap} alt="Bootstrap" className="skill-img" />
              <h5>Bootstrap</h5>
              <div className="dots">
                <span className="active"></span><span className="active"></span>
                <span className="active"></span><span className="active"></span>
                <span className="active"></span>
              </div>
            </div>
          </Col>

          <Col md={4} sm={6} xs={12}>
            <div className="skill-card">
              <img src={javascript} alt="JavaScript" className="skill-img" />
              <h5>JavaScript</h5>
              <div className="dots">
                <span className="active"></span><span className="active"></span>
                <span className="active"></span><span className="active"></span>
                <span></span>
              </div>
            </div>
          </Col>

          <Col md={4} sm={6} xs={12}>
            <div className="skill-card">
              <img src={reactjs} alt="ReactJS" className="skill-img" />
              <h5>ReactJS</h5>
              <div className="dots">
                <span className="active"></span><span className="active"></span>
                <span className="active"></span><span className="active"></span>
                <span></span>
              </div>
            </div>
          </Col>

          <Col md={4} sm={6} xs={12}>
            <div className="skill-card">
              <img src={jquery} alt="jQuery" className="skill-img" />
              <h5>jQuery</h5>
              <div className="dots">
                <span className="active"></span><span className="active"></span>
                <span className="active"></span><span className="active"></span>
                <span></span>
              </div>
            </div>
          </Col>

          <Col md={4} sm={6} xs={12}>
            <div className="skill-card">
              <img src={cpp  } alt="C" className="skill-img" />
              <h5>C</h5>
              <div className="dots">
                <span className="active"></span><span className="active"></span>
                <span className="active"></span><span className="active"></span>
                <span></span>
              </div>
            </div>
          </Col>

          <Col md={4} sm={6} xs={12}>
            <div className="skill-card">
              <img src={c} alt="C++" className="skill-img" />
              <h5>C++</h5>
              <div className="dots">
                <span className="active"></span><span className="active"></span>
                <span className="active"></span><span className="active"></span>
                <span></span>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Skill;
