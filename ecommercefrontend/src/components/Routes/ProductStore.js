import React from 'react'
import {Container,Row} from 'react-bootstrap'
import Product from '../Products/Product'

const ProductStore = () => {
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

     <Container className="mt-5" style={{ maxWidth: "960px" }}>
    <h1 className="text-center mb-4">Welcome to Our Store</h1>
    <Row className="g-3">
 
       <Product productsArr={productsArr}/>
    </Row>
  </Container>
        
  )
}

export default ProductStore