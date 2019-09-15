import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import Logo from '../../img/logo_crop.png';

class MainNavbar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <IndexLinkContainer to="/">
            <img
              src={Logo}
              width="auto"
              height="40"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </IndexLinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <IndexLinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </IndexLinkContainer>
            <LinkContainer to="/sagas">
              <Nav.Link>Sagas</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/request">
              <Nav.Link>Request</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavbar;
