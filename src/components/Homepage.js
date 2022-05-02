import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";


/* Homepage Site
 */

function Homepage() {


  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="mb-4 font-weight-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>


        <Link to="/signin" className="btn btn-primary font-weight-bold mr-3">
          Sign in
        </Link>
        <Link to="/signup" className="btn btn-primary font-weight-bold">
          Sign up
        </Link>


      </div>
    </div>

  );
}

export default Homepage;