import React from "react";
import { Link} from "react-router-dom";
import "./CompanyCard.css";

function CompanyCard({ name, description, logoUrl, handle }) {

  return (
    <div className="container">
      <Link className="CompanyCard card" to={`/companies/${handle}`} style={{ textDecoration: 'none' }}>
        <div className="card-body">
          <h6 className="card-title company-name">
            {name}
            {logoUrl && <img src={logoUrl}
              alt={name}
              className="float-right ml-5" />}
          </h6>
          <p className="description-left company-description"><small>{description}</small></p>
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;