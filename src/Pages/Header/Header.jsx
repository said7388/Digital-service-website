import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, LogOut } = useAuth();
  return (
    <div className='header'>
      <Navbar collapseOnSelect expand='lg' variant='light'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              src='https://www.linkpicture.com/q/logo_21.png'
              height='36px'
              alt=''
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse className='bg-navbar' id='responsive-navbar-nav'>
            <Nav className='mx-auto nav-bar'>
              <Nav.Link as={Link} to='/'>
                Products
              </Nav.Link>

              <Nav.Link as={Link} to='/customers'>
                Customer
              </Nav.Link>

              <Nav.Link as={Link} to='/pricing'>
                Pricing
              </Nav.Link>

              <Nav.Link as={Link} to='/'>
                Resource
              </Nav.Link>

              {!user.email ? (
                <Nav.Link as={Link} to='/login'>
                  <Button className='btn-regular'>Sign in</Button>
                </Nav.Link>
              ) : (
                <NavDropdown
                  title={
                    <img
                      className='profile-img'
                      src={user.photoURL}
                      alt='user pic'
                    />
                  }
                  id='basic-nav-dropdown'>
                  <div className='dashboard-box mx-auto'>
                    <div className='profile-info text-center'>
                      <img
                        src={user.photoURL}
                        alt=''
                        className='profile-info-img'
                      />
                      <p className='regular-subtitle mt-2'>
                        {user.displayName.toUpperCase()}
                      </p>
                      <button className='btn btn-regular py-1 px-2 rounded-pill '>
                        <i class='fas fa-user-circle'></i> View Profile
                      </button>
                    </div>
                    <hr />
                    <div className='profile-info-body'>
                      <p>
                        <Link to='/'>
                          <i class='far fa-bookmark'></i> Bookmarks
                        </Link>
                      </p>
                      <p>
                        <Link to='/' onClick={LogOut}>
                          <i class='fas fa-sign-out-alt'></i> Logout
                        </Link>
                      </p>
                    </div>
                  </div>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
