// Import React and React-Bootstrap components
import React,{useState,useContext} from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import Product from "./components/Products/Product";
import CartModal from "./components/Modal/CartModal";
import ContextProvider from "./store/ContextProvider";
import cartContext from "./store/cartContext";




function App() {

  const cartCtx = useContext(cartContext)
  
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
    
    console.log(cartCtx)
  return (
  

<ContextProvider>

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#store">Store</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link> 
              <Nav.Link href="#cart" className="btn btn-dark text-white ms-3 px-3" onClick={handleCartShow}>
                Cart{cartCtx.cart.length}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
