import React from "react";
import ReactGA from "react-ga";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main/Main";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { Detail } from "../src/Pages/Detail/Detail";

ReactGA.initialize("UA-158177035-2");

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path={`/:name/:title`} component={Detail} />
        <Route exact path="/member" component={AboutUs} />
      </Switch>
    </Router>
  );
};

export default App;
