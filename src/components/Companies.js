import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Companies.css";
import JoblyApi from "../api/Api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";


function Companies() {
  const [companies, setCompanies] = useState(null);
  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      console.log(companies)
      setCompanies(companies);
    }
    getCompanies();
  }, []);

  if (!companies) {
    return <p>Loading &hellip;</p>;
  }


  return (
    <div className="companies">
      <div className="container form-margin">
        <SearchForm></SearchForm>
      </div>


      {companies.map(company => (
        <CompanyCard
          key={company.handle}
          handle={company.handle}
          name={company.name}
          description={company.description}
          logoUrl={company.logoUrl}
        />
      ))}
    </div>

  );
}

export default Companies;




