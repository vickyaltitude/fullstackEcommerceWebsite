// Import React and React-Bootstrap components
import React,{useState} from "react";
import {Container, Row } from "react-bootstrap";
import Product from "./components/Products/Product";
import CartModal from "./components/Modal/CartModal";
import ContextProvider from "./store/ContextProvider";
import NavBar from "./components/NavBar/NavBar";




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

    const [showCart, setShowCart] = useState(false);

    const handleCartShow = () => setShowCart(true);
    const handleCartClose = () => setShowCart(false);
 
  return (
  

<ContextProvider>
     <NavBar onHandleCartShow={handleCartShow} />
      <Container className="mt-5" style={{ maxWidth: "960px" }}>
        <h1 className="text-center mb-4">Welcome to Our Store</h1>
        <Row className="g-3">
          {/* products card here */}
           <Product productsArr={productsArr}/>
        </Row>
      </Container>

      <CartModal onHandleCartClose={handleCartClose} onHandleCartShow={handleCartShow} showCart={showCart}/>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <Container>
          <p className="mb-0">&copy; 2024 My Store. All rights reserved.</p>
        </Container>
      </footer>
    </ContextProvider>
   
  );
}

export default App;
