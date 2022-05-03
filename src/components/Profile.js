import React, { useContext, useState } from "react";
import "./Profile.css";
import UserContext from "../hooks/UserContext";
import { Redirect } from "react-router-dom";

function Profile({changeProfile}) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    password: "",
    email:currentUser.email
  });

  function handleChange(e) {
    e.persist();
    console.log(e.target.value)
    setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await changeProfile(currentUser.username, formData);
    if (res["success"]){
      setSuccessMsg(res["success"]);
    }else{
      setSuccessMsg(res["error"]);
    }
  }


  return (
    <div className="profile">

      <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h3 className="left">Profile</h3>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group left">
                <label>Username</label>
                <p className="form-control-plaintext">{currentUser.username}</p>
              </div>
              <div className="form-group left left">
                <label>First Name</label>
                <input
                  name="firstName"
                  className="form-control left"
                  value={currentUser.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group left">
                <label>Last Name</label>
                <input
                  name="lastName"
                  className="form-control left"
                  value={currentUser.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group left">
                <label>Email</label>
                <input
                  name="email"
                  className="form-control left"
                  value={currentUser.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group left">
                <label>Confirm password to make changes:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control left"
                  value={currentUser.password}
                  onChange={handleChange}
                />
              </div>
              {setSuccessMsg
              ? <p>{successMsg}</p>
              : <p>{errorMsg}</p>}

              <button
                className="btn btn-style btn-block mt-4"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>



    </div>

  );
}

export default Profile;