import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./heroSection.css";
import AppNavbar from "../navBar";

function HeroSection() {
  return (
    <section className="hero-section">
      <AppNavbar />
      <Container className="vh-100 d-flex align-items-center justify-content-center">
        <Row className="position-absolute w-100">
          <Col md={12}>
            <div className="hero-content">
              <h1>Indulge in Irresistible Delights at Café QScript</h1>
              <p>
                Satisfy your cravings with our exquisite selection of specialty
                coffee, expertly brewed to perfection. Paired with our heavenly
                pastries, each visit promises a delightful escape.
              </p>
              <p>
                Explore the cozy ambiance and treat yourself to a memorable
                experience at Café QScript, your ultimate destination for coffee
                bliss.
              </p>
              <Button
                className="rounded-pill fw-semiBold"
                variant="light"
                href="#contact"
              >
                Contact Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
