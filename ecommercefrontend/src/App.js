// Import React and React-Bootstrap components
import React,{useState} from "react";
import {Container} from "react-bootstrap";
import CartModal from "./components/Modal/CartModal";
import ContextProvider from "./store/ContextProvider";
import NavBar from "./components/NavBar/NavBar";
 import {Routes,Route} from 'react-router-dom';
import Home from "./components/Routes/Home";
import ProductStore from "./components/Routes/ProductStore";
import About from "./components/Routes/About";




function App() {


    const [showCart, setShowCart] = useState(false);

    const handleCartShow = () => setShowCart(true);
    const handleCartClose = () => setShowCart(false);
 
  return (
  

<ContextProvider>
     <NavBar onHandleCartShow={handleCartShow} />

      <CartModal onHandleCartClose={handleCartClose} onHandleCartShow={handleCartShow} showCart={showCart}/>


      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<ProductStore />} />
      <Route path='/about' element={<About />} />
     </Routes>

     
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <Container>
          <p className="mb-0">&copy; 2024 My Store. All rights reserved.</p>
        </Container>
      </footer>
 

    </ContextProvider>
   
  );
}

export default App;
