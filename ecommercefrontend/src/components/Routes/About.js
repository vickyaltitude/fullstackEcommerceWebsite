import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
    <Row className="align-items-center">
      {/* Left Section: Text */}
      <Col md={6}>
        <Card className="border-0 shadow-sm">
          <Card.Body>
            <h2 className="text-primary mb-4">About Us</h2>
            <p>
              Welcome to our store! We are passionate about offering the best
              products at the best prices. Our team is dedicated to providing
              excellent customer service and ensuring that you have a great
              shopping experience. Explore our collection of top-quality
              products and find something you love today.
            </p>
            <p>
              Our mission is to bring high-quality products to your doorstep
              at affordable prices. We believe in sustainability, quality,
              and customer satisfaction. Thank you for choosing us!
            </p>
          </Card.Body>
        </Card>
      </Col>

      {/* Right Section: Image */}
      <Col md={6}>
        <Card className="border-0 shadow-sm">
          <Card.Body className="d-flex justify-content-center">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfYMofw1zQuXi8Te4ADAVECDDagsZF-QmNh02Bo8lCeaFZVrv7w8J8o7PTNKs10j3SGM&usqp=CAU"
              alt="About Us"
              rounded
              fluid
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default About