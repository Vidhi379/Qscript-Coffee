import React from "react";
import { Container } from "react-bootstrap";
import "./styles.css"; // Import your CSS file for styling if needed

function AboutUs() {
  return (
    <section id="about" className="about-us-section">
      <Container>
        <div className="about-content">
          <h2 className="section-title">Our Story & Mission</h2>
          <p className="section-description">
            QScript Coffee began in a small roastery, fueled by a love for
            coffee and community. Each cup we serve embodies our dedication to
            quality and craft. We carefully source the finest beans and brew
            them with precision, ensuring every sip is a moment of joy.
          </p>
          <p className="section-description">
            But we're more than just coffee. Sustainability is our mission.
            We're committed to reducing waste and giving back to our community.
            At QScript, we're a gathering place, a home away from home. Our
            mission is simple: to bring people together through exceptional
            coffee and genuine hospitality. Join us and make every moment
            matter.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default AboutUs;
