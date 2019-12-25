import React from "react";
import "./App.css";
import Header from "./Components/Header"
import Main from "./Pages/Main"
import { Detail } from "../src/Pages/Detail/Detail";

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <Main/>
      {/* <Detail name={"hyunseo"} postTitle={"hyunseo_5reason-to-use-graphql"} /> */}
    </div>
  );
};

export default App;
