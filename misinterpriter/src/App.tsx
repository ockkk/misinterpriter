import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { Detail } from "../src/Pages/Detail/Detail";
import articleData from "./Assets/articleData.json";

const App: React.FC = props => {
  return (
    <div>
      <Header />
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path={`/:name/:title`} component={Detail} />
        <Route exact path="/member" component={AboutUs} />
      </Router>
    </div>
  );
};

export default App;
