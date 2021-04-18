import React, { createContext, useState } from 'react';

import './App.css';
import Home from "./Components/Home/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login/Login';
import User from './Components/User/User';
import Navbar from './Components/Shared/Navbar/Navbar';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          {/* <Route path="/user">
            <Navbar></Navbar>
            <User></User>
          </Route> */}
          <Route path="/admin">
            <Navbar></Navbar>
            <Dashboard></Dashboard>
          </Route>
          <PrivateRoute path="/user">
          <Navbar></Navbar>
            <User></User>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
