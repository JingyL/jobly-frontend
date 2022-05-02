import React from "react";
import { Link } from "react-router-dom";

import "./JobCard.css";



function JobCard({ key, handle, title, salary, equity, name }) {


  return (
    <div className="container">
      <div className="CompanyCard card">
        <div className="card-body">
          <h6 className="card-title">
            {title}
          </h6>
          <h6 className="description-right">
            {name}
          </h6>
          <p className="description-left"><small>salary: {salary}</small></p>
          <p className="description-left"><small>equity: {equity}</small></p>
          <button className="right">Apply</button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;