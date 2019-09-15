import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import Logo from '../../img/logo_crop.png';
import './MainNavbar.css';


class MainNavbar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <LinkContainer to="/">
          <Nav.Link eventKey="1">
            <img
              src={Logo}
              width="auto"
              height="70"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Nav.Link>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-center">
          <Nav justify activeKey="" >
            <Nav.Item>
            <IndexLinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </IndexLinkContainer>
            </Nav.Item>
            <Nav.Item>
            <LinkContainer to="/sagas">
              <Nav.Link>Sagas</Nav.Link>
            </LinkContainer>
            </Nav.Item>
            <Nav.Item>
            <LinkContainer to="/request">
              <Nav.Link>Request</Nav.Link>
            </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavbar;
