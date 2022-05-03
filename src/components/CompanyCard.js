import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "./CompanyCard.css";
import UserContext from "../hooks/UserContext";

function CompanyCard({ name, description, logoUrl, handle }) {

  return (
    <div className="container">
      <Link className="CompanyCard card" to={`/companies/${handle}`} style={{ textDecoration: 'none' }}>
        <div className="card-body">
          <h6 className="card-title">
            {name}
            {logoUrl && <img src={logoUrl}
              alt={name}
              className="float-right ml-5" />}
          </h6>
          <p className="description-left"><small>{description}</small></p>
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;