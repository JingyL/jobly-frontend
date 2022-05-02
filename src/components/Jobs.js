import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Companies.css";
import JoblyApi from "../api/Api";

import SearchForm from "../common/SearchForm";
import JobCard from "./JobCard";


function Jobs() {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs();
      console.log(jobs)
      setJobs(jobs);
    }
    getJobs();
  }, []);

  if (!jobs) {
    return <p>Loading &hellip;</p>;
  }


  return (
    <div className="jobs">
      <div className="container form-margin">
        <SearchForm></SearchForm>
      </div>

      {jobs.map(job => (
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

export default Jobs;