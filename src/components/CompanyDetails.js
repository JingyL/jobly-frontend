import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/Api";
import JobCard from "./JobCard";



function CompanyDetails({applyToJob}) {
  const { handle } = useParams();
  const [companyDetails, setCompanyDetails] = useState(null);
  useEffect(() => {
    async function getCompany() {
      let companyJobs = await JoblyApi.getCompany(handle);
      setCompanyDetails(companyJobs);
    }
    getCompany();
  }, [handle]);

  if (!companyDetails) {
    return <p className="loading">Loading &hellip;</p>;
  }

  return (
    <div className="container">
      <h4 className="left page-name">{companyDetails.name}</h4>
      <h6 className="left page-name">{companyDetails.description}</h6>
      {companyDetails.jobs.map(job => (
        <JobCard
          id={job.id}
          handle={job.companyHandle}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          name={job.companyName}
          applyToJob={applyToJob}
        />
      ))}

    </div>
  );
}

export default CompanyDetails;