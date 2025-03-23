import React from 'react';
import {Container, Navbar, Nav, Image, Dropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from '../actions/userAction'

const Loginbar = () => {
  const dispatch=useDispatch()
  const cartState= useSelector((state) => state.cartReducer);
  const userState= useSelector((state) => state.loginUserReducer);
  const {currentUser}= userState;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="warning" id="" variant="light">
  <Container>
  <Navbar.Brand href="/">MyNFT Shop
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      {
        currentUser ? ( <LinkContainer to ="/"> 
        
        <Dropdown>
  <Dropdown.Toggle id="basic-nav-dropdown">
  {currentUser.name}
  </Dropdown.Toggle>
 
  <Dropdown.Menu>
    <LinkContainer to="/orders"> 
    <Dropdown.Item>Order</Dropdown.Item>
    </LinkContainer>
    <Dropdown.Item onClick={()=>{dispatch(logoutUser())}}>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</LinkContainer>) :( 
<>   
 {" "}
      <LinkContainer to="/login"> 
      <Nav.Link >Login</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/register"> 
      <Nav.Link >Register</Nav.Link>
      </LinkContainer>
        </>)
      }
      
      <LinkContainer to="/cart"> 
      <Nav.Link >Cart {cartState.cartItems.length}</Nav.Link>
      </LinkContainer>
    
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}

export default Loginbar;
