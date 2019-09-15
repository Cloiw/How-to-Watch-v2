import React from "react";
import {Navbar, Nav, NavDropdown, Container, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../img/logo_crop.png'

class MainNavbar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            width="auto"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/sagas">Sagas</Nav.Link>
            <Nav.Link as={Link} to="/request">Request</Nav.Link>
      
          </Nav>
         
  
        </Navbar.Collapse>
      </Navbar>
  
    )
  }
}

export default MainNavbar;


