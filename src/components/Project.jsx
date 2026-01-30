import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Project.css';

import kayan from "../assets/kayan.png";
import book from "../assets/book.png";
import patag from "../assets/patag.png";
import growing from "../assets/growing.png";
import veggies from "../assets/veggies.png";
import hotel from "../assets/hotel.png";

function Project() {
  return (
    <section className="project-section" style={{ marginTop: "100px" }}>
      <Container>

        {/* ===== HEADER ===== */}
        <div className="project-header">
          <h2 className="project-title">Projects</h2>
        </div>
        <hr className="project-line" />

        {/* ===== PROJECTS GRID ===== */}
        <Row className="g-5">

          {/* Project 1 */}
          <Col md={6}>
            <a href="https://jewelleryweb.vercel.app" target="_blank" rel="noreferrer" className="project-link">
              <div className="project-card">
                <div className="project-img-wrapper">
                  <img src={kayan} alt="Jewellery Website" />
                  <div className="project-hover">
                    <div className="hover-icon">↗</div>
                  </div>
                </div>
                <div className="project-info">
                  <h4>Jewellery Website</h4>
                  <p>Luxury jewellery eCommerce website</p>
                </div>
              </div>
            </a>
          </Col>

          {/* Project 2 */}
          <Col md={6}>
            <a href="https://bookproduct.vercel.app" target="_blank" rel="noreferrer" className="project-link">
              <div className="project-card">
                <div className="project-img-wrapper">
                  <img src={book} alt="Book Product" />
                  <div className="project-hover">
                    <div className="hover-icon">↗</div>
                  </div>
                </div>
                <div className="project-info">
                  <h4>Book Product</h4>
                  <p>Online book selling product page</p>
                </div>
              </div>
            </a>
          </Col>

          {/* Project 3 */}
          <Col md={6}>
            <a href="https://patang-hotel-delta.vercel.app" target="_blank" rel="noreferrer" className="project-link">
              <div className="project-card">
                <div className="project-img-wrapper">
                  <img src={patag} alt="Patang Hotel" />
                  <div className="project-hover">
                    <div className="hover-icon">↗</div>
                  </div>
                </div>
                <div className="project-info">
                  <h4>Patang Hotel</h4>
                  <p>Hotel booking and showcase website</p>
                </div>
              </div>
            </a>
          </Col>

          {/* Project 4 */}
          <Col md={6}>
            <a href="https://beautyproduct-five.vercel.app" target="_blank" rel="noreferrer" className="project-link">
              <div className="project-card">
                <div className="project-img-wrapper">
                  <img src={growing} alt="Beauty Product" />
                  <div className="project-hover">
                    <div className="hover-icon">↗</div>
                  </div>
                </div>
                <div className="project-info">
                  <h4>Beauty Product</h4>
                  <p>Cosmetics and beauty product website</p>
                </div>
              </div>
            </a>
          </Col>

          {/* Project 5 */}
          <Col md={6}>
            <a href="https://veggies-sell.vercel.app" target="_blank" rel="noreferrer" className="project-link">
              <div className="project-card">
                <div className="project-img-wrapper">
                  <img src={veggies} alt="Veggies Sell" />
                  <div className="project-hover">
                    <div className="hover-icon">↗</div>
                  </div>
                </div>
                <div className="project-info">
                  <h4>Veggies Sell</h4>
                  <p>Online vegetables selling platform</p>
                </div>
              </div>
            </a>
          </Col>

          {/* Project 6 */}
          <Col md={6}>
            <a href="https://hotel.vercel.app" target="_blank" rel="noreferrer" className="project-link">
              <div className="project-card">
                <div className="project-img-wrapper">
                  <img src={hotel} alt="Hotel Website" />
                  <div className="project-hover">
                    <div className="hover-icon">↗</div>
                  </div>
                </div>
                <div className="project-info">
                  <h4>Hotel Website</h4>
                  <p>Modern hotel landing & booking website</p>
                </div>
              </div>
            </a>
          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default Project;
