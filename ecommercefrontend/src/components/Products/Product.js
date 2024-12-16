import React, { useContext } from 'react'
import {Col,Card,Button} from "react-bootstrap"
import cartContext from '../../store/cartContext'
import { Link } from 'react-router-dom'
const Product = ({productsArr}) => {
  
  const cartCtx = useContext(cartContext);

  function handleAddToCart(prod){
      cartCtx.addToCart(prod)
  }


  return (
    <>
        {productsArr.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4}>
              <Link to={`/store/${product.id}`} className="text-decoration-none">
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
                    <Button variant="primary" onClick={()=>handleAddToCart(product)}>Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          ))}
    </>
  )
}

export default Product