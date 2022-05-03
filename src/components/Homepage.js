import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../hooks/UserContext";

/* Homepage Site
 */

function Homepage() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="projectName mb-4 font-weight-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>

        {currentUser
        ? <p className="welcome-words">Welcome back, {currentUser.username}!!!</p>
      :<>
      <Link to="/signin" className="btn btn-style font-weight-bold mr-3">
          Sign in
        </Link>
        <Link to="/signup" className="btn btn-style font-weight-bold">
          Sign up
        </Link>
        </>}
        


      </div>
    </div>

  );
}

export default Homepage;