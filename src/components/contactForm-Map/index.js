import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import "./styles.css"; // Import your CSS file for styling if needed

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Mock submission logic (replace with actual submission logic)
      console.log("Form submitted:", formData);
      // Clear form data after submission
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      setSubmitSuccess(true);
    }
    setValidated(true);
  };

  return (
    <section id="contact" className="contact-us-section">
      <Container>
        <h2 className="section-title">Contact Us</h2>
        <Row>
          <Col className="pt-2" md={6}>
            {" "}
            {submitSuccess && (
              <Alert variant="success">
                Form submitted successfully! We'll get back to you soon.
              </Alert>
            )}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>
                  Name <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>
                  Email <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>
                  Phone Number <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.926970815046!2d75.95167357453906!3d12.454584326003665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5091e9240229b%3A0xc5c926abac438a80!2sQscript%20Software%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1711994869517!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                title="QScript Coffee Location"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
