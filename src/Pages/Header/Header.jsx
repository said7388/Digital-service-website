import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <Navbar collapseOnSelect expand='lg' variant='light'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              src='https://www.linkpicture.com/q/logo_21.png'
              height='36px'
              alt=''
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse className='bg-navbar' id='responsive-navbar-nav'>
            <Nav className='mx-auto nav-bar'>
              <Nav.Link>
                <NavLink to='/'>Products</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/'>Customer</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/'>Pricing</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/'>Resource</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/login'>
                  <Button variant='outline-success'>Sign in</Button>
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/signup'>
                  <Button className='btn-regular'>Sign Up</Button>
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
