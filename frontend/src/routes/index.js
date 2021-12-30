import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/login";
import Register from "../components/register";
import NotFound from "../components/NotFound"
import Home from "../components/home";

function Routes() {
 
    return (
      <Router>
        <Switch>
          <Route path="/register"  component={Register} />
          <Route path="/login"  component={Login} />
          <Route path="/home"  component={Home} />
          <Route component={NotFound} />  
        </Switch>   
      </Router>
    )
  };
  
  
  
  export default Routes