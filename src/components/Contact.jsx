import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    // simulate submit
    setTimeout(() => {
      console.log("Form Data:", formData);
      alert("Message sent successfully!");

      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <section className="contact-section">
      <Container>

        {/* HEADER */}
        <div className="contact-header">
          <h2>Contact Me</h2>
        </div>

        <hr className="contact-line" />

        <Row>
          <Col md={8}>
            <form className="contact-form" onSubmit={handleSubmit}>

              <Row>
                <Col md={6}>
                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* BUTTON */}
              <div className="contact-bottom-row">
                <button
                  type="submit"
                  className={`send-btn ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? <span className="loader"></span> : "Send Now"}
                </button>
              </div>

            </form>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="bottom-divider">
              <span className="divider-line"></span>
              <span className="divider-circle">M</span>
              <span className="divider-line"></span>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Contact;
