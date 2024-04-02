import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./styles.css"; // Import your CSS file for styling if needed
import { menuItems } from "./data";

function Menu() {
  return (
    <section id="menu" className="menu-section">
      <Container>
        <h2 className="section-title">Featured Favorites</h2>
        <Row>
          {menuItems.map((item, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="menu-item">
                <Card.Img className='card-img' variant="top" src={item.imgUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Menu;
