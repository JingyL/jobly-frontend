import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import UserContext from "../hooks/UserContext";
import "./JobCard.css";



function JobCard({ id, handle, title, salary, equity, name, applyToJob }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { jobApplied, setJobApplied } = useContext(UserContext);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    let response = await applyToJob(currentUser.username, id);
    if (response["success"]) {
      setSuccessMsg(response["success"])
    } else {
      setErrorMsg(response.error);
    }
  }
  if (!currentUser){
    return <Redirect to="/" />
  }

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
          {successMsg
            ? <p>{successMsg}</p>       
            : <p>{errorMsg}</p>}

          {jobApplied.includes(id) || successMsg
          ?<button className="right applyButton">Applied</button>
          : <button className="right applyButton" onClick={handleSubmit}>Apply</button>}
          
        </div>
      </div>
    </div>
  );
}

export default JobCard;