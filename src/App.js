import React from "react";

import "./App.css";
import PersonIcon from "@material-ui/icons/Person";
import Home from "./pages/home/Home";
import Topbar from "./components/Topbar";
import Profile from "./pages/home/profile/Profile";
import LogIn from "./pages/login/LogIn";
import Register from "./pages/register/Register";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
