import React from 'react';
import { Container, Row, Col, Card, Button, Carousel, Image } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      {/* Hero Section: Banner Image with Welcome Message */}
      <Container fluid className="p-0">
        <Carousel>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://via.placeholder.com/1500x600"
              alt="First slide"
              fluid
            />
            <Carousel.Caption>
              <h3>Welcome to Our Store!</h3>
              <p>Explore a wide range of products at amazing prices.</p>
              <Button variant="primary" size="lg">Shop Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://via.placeholder.com/1500x600"
              alt="Second slide"
              fluid
            />
            <Carousel.Caption>
              <h3>High Quality, Affordable Prices</h3>
              <p>Our goal is to provide you with the best deals.</p>
              <Button variant="primary" size="lg">Shop Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Featured Products Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <Card.Body>
                <Card.Title>Product 1</Card.Title>
                <Card.Text>
                  A short description of the product. Great for daily use and made with high-quality materials.
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <Card.Body>
                <Card.Title>Product 2</Card.Title>
                <Card.Text>
                  Another fantastic product that combines style and durability for your everyday needs.
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <Card.Body>
                <Card.Title>Product 3</Card.Title>
                <Card.Text>
                  Premium quality product that ensures comfort and convenience for your lifestyle.
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* About Section */}
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              We are a passionate company dedicated to bringing you high-quality products at affordable
              prices. Our mission is to make shopping enjoyable, easy, and efficient. With a team of
              experienced professionals, we ensure that every product you purchase is worth your investment.
            </p>
            <Button variant="info">Learn More</Button>
          </Col>
          <Col md={6}>
            <Image
              src="https://via.placeholder.com/500x300"
              alt="About Us"
              fluid
              rounded
            />
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Text>
                  "Amazing quality! I love the products and the customer service was top-notch. Highly
                  recommended!"
                </Card.Text>
                <Card.Footer className="text-muted">John Doe</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Text>
                  "A great shopping experience. The products arrived on time and exceeded my expectations."
                </Card.Text>
                <Card.Footer className="text-muted">Jane Smith</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Text>
                  "Excellent service and great value for money. I'll definitely be shopping here again."
                </Card.Text>
                <Card.Footer className="text-muted">Emily Johnson</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
