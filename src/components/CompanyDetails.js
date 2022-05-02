import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import JoblyApi from "../api/Api";
import "./CompanyDetails.css";
import JobCard from "./JobCard";



function CompanyDetails() {
  const { handle } = useParams();
  console.log(handle)
  const [companyDetails, setCompanyDetails] = useState(null);
  useEffect(() => {
    async function getCompany() {
      let companyJobs = await JoblyApi.getCompany(handle);
      setCompanyDetails(companyJobs);
    }
    getCompany();
  }, []);

  if (!companyDetails) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="container">
      <h4 className="left">{companyDetails.name}</h4>
      <h6 className="left">{companyDetails.description}</h6>
      {companyDetails.jobs.map(job => (
        <JobCard
          key={job.id}
          handle={job.companyHandle}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          name={job.companyName}
        />
      ))}

    </div>
  );
}

export default CompanyDetails;