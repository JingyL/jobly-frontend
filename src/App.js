import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './components/Navbar';
import useLocalStorage from './hooks/useLocalStorage';
import { useState } from 'react';
import JoblyApi from "./api/Api";
import jwt from "jsonwebtoken";
import Routes from './routes/Routes';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const UserContext = React.createContext();

  async function getCurrentUser() {
    if (token) {
      try {
        let { username } = jwt.decode(token);
        JoblyApi.token = token;
        let currentUser = await JoblyApi.getCurrentUser(username);
        setCurrentUser(currentUser);
      } catch (err) {
        setCurrentUser(null);
      }
    }
  }  
  async function login(data){
    try{
      let token = await JoblyApi.login(data);
      setToken(token);
      return {"success":token};
    }catch(errors){
      return {"error": errors};
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes></Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
