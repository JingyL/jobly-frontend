import React, { useState } from "react";
import "./SignIn.css";
import { Link, useHistory, useParams } from "react-router-dom";


function SignIn({login}) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState("");

  function handleChange(e) {
    e.persist();
    console.log(e.target.value);
    setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
  }


  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    // get login token, if errors, give err msg, else link to /companies
      let response = await login(formData);
      console.log("login", response)
      if (response["success"]){
        history.push("/companies");
      }else{
        setFormErrors(response.error);
      }

  }


  return (
    <div className="siginin">

      <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h3 className="left page-name">Sign In</h3>
        <div className="card signin-card">
          <div className="card-body">
            <form>
              <div className="form-group left signin-label-font">
                <label>Username</label>
                <input
                  name="username"
                  className="form-control left"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group left left signin-label-font">
                <label>Password</label>
                <input
                  name="password"
                  className="form-control left"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {formErrors != ""
                ? <p className="danger" messages={formErrors}>{formErrors}</p>
                : null}

              <button
                className="btn btn-style btn-block mt-4"
                onClick={handleSubmit}
              >
                Sign In
              </button>

            </form>
          </div>
        </div>
      </div>



    </div>

  );
}

export default SignIn;