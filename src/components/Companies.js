import React, { useEffect, useState } from "react";
import "./Companies.css";
import JoblyApi from "../api/Api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";

function Companies() {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompanies();
  }, []);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) {
    return <p className="loading">Loading &hellip;</p>;
  }

  return (
    <div className="companies">
      <div className="container form-margin">
        <SearchForm searchFor={search}></SearchForm>
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




