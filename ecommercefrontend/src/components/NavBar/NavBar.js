import React,{useContext} from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import cartContext from '../../store/cartContext'

const NavBar = ({onHandleCartShow}) => {

    const cartCtx = useContext(cartContext)

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
              <Nav.Link href="#cart" className="btn btn-dark text-white ms-3 px-3" onClick={onHandleCartShow}>
                Cart({cartCtx.cart.length})
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default NavBar