import React, {useEffect, useState } from "react";
import JoblyApi from "../api/Api";
import SearchForm from "../common/SearchForm";
import JobCard from "./JobCard";

// Load all Jobs
function Jobs({applyToJob}) {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobs();
  }, []);

  async function search(jobName) {
    let allJobs = await JoblyApi.getJobs(jobName);
    setJobs(allJobs);
  }

  if (!jobs) {
    return <p className="loading">Loading &hellip;</p>;
  }

  return (
    <div className="jobs">
      <div className="container bg form-margin">
        <SearchForm searchFor={search}></SearchForm>
      </div>

      {jobs.map(job => (
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

export default Jobs;