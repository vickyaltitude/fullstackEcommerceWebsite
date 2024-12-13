// Import React and React-Bootstrap components
import React from "react";
import { Navbar, Nav, Container, Row, Col, Card, Button } from "react-bootstrap";

function App() {

  const productsArr = [

    {
      id:1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    
    { 
      id:2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    
    {
      id:3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    
    { 
      id:4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]
    
    
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#store">Store</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link> 
              <Nav.Link href="#cart" className="btn btn-dark text-white ms-3 px-3">
                Cart({0})
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5" style={{ maxWidth: "960px" }}>
        <h1 className="text-center mb-4">Welcome to Our Store</h1>
        <Row className="g-3">
    
          {productsArr.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4}>
              <Card style={{ height: "420px" }}>
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={`Product ${product.title}`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>Product {product.title}</Card.Title>
                  <Card.Text>
                    This is a short description of product {product.title}. It is high-quality and worth buying!
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">{product.price}</span>
                    <Button variant="primary">Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <Container>
          <p className="mb-0">&copy; 2024 My Store. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}

export default App;
