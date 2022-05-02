import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
          <ul>
            <li><NavLink to="/companies" style={{ textDecoration: 'none' }}>Companies</NavLink></li>
            <li><NavLink to="/jobs" style={{ textDecoration: 'none' }}>Jobs</NavLink></li>
            <li><NavLink to="/profile" style={{ textDecoration: 'none' }}>Profile</NavLink></li>
            <li><NavLink to="/signin" style={{ textDecoration: 'none' }}>Sign In</NavLink></li>
          </ul>


        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;