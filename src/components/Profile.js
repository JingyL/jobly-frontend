import React from "react";
import "./Profile.css";



function Profile() {
  function handleChange(e) {
    e.persist();
    console.log(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log()

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
                <p className="form-control-plaintext">XXXX</p>
              </div>
              <div className="form-group left left">
                <label>First Name</label>
                <input
                  name="firstName"
                  className="form-control left"
                  value=""
                  onChange={handleChange}
                />
              </div>
              <div className="form-group left">
                <label>Last Name</label>
                <input
                  name="lastName"
                  className="form-control left"
                  value=""
                  onChange={handleChange}
                />
              </div>
              <div className="form-group left">
                <label>Email</label>
                <input
                  name="email"
                  className="form-control left"
                  value=""
                  onChange={handleChange}
                />
              </div>
              <div className="form-group left">
                <label>Confirm password to make changes:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control left"
                  value=""
                  onChange={handleChange}
                />
              </div>


              <button
                className="btn btn-primary btn-block mt-4"
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