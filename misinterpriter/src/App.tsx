import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main/Main";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { Detail } from "../src/Pages/Detail/Detail";

const App: React.FC = props => {
  return (
    <div>
      <Router>
      <Header />
        <Route exact path="/" component={Main} />
        <Route exact path={`/:name/:title`} component={Detail} />
        <Route exact path="/member" component={AboutUs} />
      </Router>
    </div>
  );
};

export default App;
