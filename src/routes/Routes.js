import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from '../components/Homepage';
import Companies from '../components/Companies';
import Jobs from '../components/Jobs';
import Profile from '../components/Profile';
import SignIn from '../components/SignIn';
import CompanyDetails from '../components/CompanyDetails';
import SignUp from '../components/SignUp';

function Routes({ login, signup }) {

  return(
        <Switch>
        <Route exact path="/">
          <Homepage></Homepage>
        </Route>
        <Route exact path="/companies">
          <Companies></Companies>
        </Route>
        <Route exact path="/companies/:handle">
          <CompanyDetails></CompanyDetails>
        </Route>
        <Route exact path="/jobs">
          <Jobs></Jobs>
        </Route>
        <Route exact path="/profile">
          <Profile></Profile>
        </Route>
        <Route exact path="/signin">
          <SignIn login={login}></SignIn>
        </Route>
        <Route exact path="/signup">
          <SignUp signup={signup}></SignUp>
        </Route>
      </Switch>
  )
}

export default Routes;