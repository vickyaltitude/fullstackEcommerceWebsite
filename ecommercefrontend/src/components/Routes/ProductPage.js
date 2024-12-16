import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    description: "Brand new T-shirt that fits your personality perfectly. Lorem Ipsum is a long-established dummy text used for demonstration purposes.",
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 2,
    title: 'Black and White Colors',
    price: 50,
    description: "Stylish black and white T-shirt for a bold look. Lorem Ipsum is dummy text that provides a standard representation.",
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    description: "Trendy yellow and black T-shirt for a vibrant look. Lorem Ipsum is dummy text used for visual designs.",
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    description: "Elegant blue T-shirt for a classic appearance. Lorem Ipsum is placeholder text used for layout representation.",
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <div>Product not found!</div>;

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
      <Row>
        <Col xs={12} md={10} lg={12}>
          <Card className="shadow-lg" style={{ borderRadius: '10px', overflow: 'hidden' }}>
            <Card.Img
              variant="top"
              src={product.imageUrl}
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Card.Body className="p-4">
              <Card.Title className="text-center mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {product.title}
              </Card.Title>
              <Card.Text className="text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                {product.description}
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#007bff' }}>
                  ${product.price}
                </span>
                <Button variant="primary" size="lg">
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
