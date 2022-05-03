import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Homepage from '../components/Homepage';
import Companies from '../components/Companies';
import Jobs from '../components/Jobs';
import Profile from '../components/Profile';
import SignIn from '../components/SignIn';
import CompanyDetails from '../components/CompanyDetails';
import SignUp from '../components/SignUp';
import PrivateRoute from "./PrivateRoute";

function Routes({ login, signup,changeProfile, applyToJob }) {

  return(
        <Switch>
        <Route exact path="/">
          <Homepage></Homepage>
        </Route>
        <PrivateRoute exact path="/companies">
          <Companies></Companies>
        </PrivateRoute>
        <PrivateRoute exact path="/companies/:handle">
          <CompanyDetails></CompanyDetails>
        </PrivateRoute>
        <PrivateRoute exact path="/jobs">
          <Jobs applyToJob={applyToJob}></Jobs>
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile changeProfile={changeProfile}></Profile>
        </PrivateRoute>
        <Route exact path="/signin">
          <SignIn login={login}></SignIn>
        </Route>
        <Route exact path="/signup">
          <SignUp signup={signup}></SignUp>
        </Route>
        <Redirect to="/" />
      </Switch>
  )
}

export default Routes;