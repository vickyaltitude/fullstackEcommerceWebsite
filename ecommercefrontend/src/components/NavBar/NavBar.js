import React,{useContext} from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import cartContext from '../../store/cartContext'
import { NavLink } from 'react-router-dom'

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
              <NavLink  exact ={true}
                    to="/"
                    className="nav-link"
                    activeClassName="active" >Home</NavLink>
              <NavLink  exact ={true}
                    to="/store"
                    className="nav-link"
                    activeClassName="active" >Store</NavLink>
              <NavLink   exact ={true}
                    to="/about"
                    className="nav-link"
                    activeClassName="active" >About</NavLink> 
              <Nav.Link  className="btn btn-dark text-white ms-3 px-3" onClick={onHandleCartShow}>
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