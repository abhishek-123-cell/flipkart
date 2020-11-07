import React from 'react';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';


const Header=(props)=> {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/' className='navbar-brand'>
          DASHBOARD
        </Link>
        {/* <Navbar.Brand href="#home">DASHBOARD</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <li className="nav-item float-right">
              <NavLink to="signin" className="nav-link">
                SignIn
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="signup" className="nav-link">
                Signup
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header

