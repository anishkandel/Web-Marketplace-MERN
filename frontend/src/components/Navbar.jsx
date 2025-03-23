import React from "react";
import { Navbar, Nav, Container, Image} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const NavBar = () => {
 
    return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
          <Image
              src="images/logo.png"
              alt="logo"
              style={{ width: "100px", height: "100px" }}
            />
         
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName="">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName="">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName="">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/disclaimer" activeClassName="">
              <Nav.Link>Disclaimers</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
