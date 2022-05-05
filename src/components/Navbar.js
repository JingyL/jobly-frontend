import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav} from "reactstrap";
import UserContext from "../hooks/UserContext";


// nav bar
function NavBar({ logout }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser)
  return (
    <div>
      <Navbar className="navbar-bg" expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
          <ul>
            {currentUser
              ? <>
                <li><NavLink to="/companies" style={{ textDecoration: 'none' }}>Companies</NavLink></li>
                <li><NavLink to="/jobs" style={{ textDecoration: 'none' }}>Jobs</NavLink></li>
                <li><NavLink to="/profile" style={{ textDecoration: 'none' }} >Profile</NavLink></li>
                <li><NavLink to="/" style={{ textDecoration: 'none' }} onClick={logout}>Sign Out</NavLink></li>
              </>
              : <>
                <li><NavLink to="/signin" style={{ textDecoration: 'none' }}>Sign In</NavLink></li>
                <li><NavLink to="/signup" style={{ textDecoration: 'none' }}>Sign Up</NavLink></li>
              </>}
          </ul>


        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;