import React from "react";
import "./App.css";
import { Detail } from "../src/Pages/Detail/Detail";
const App: React.FC = () => {
  return (
    <div>
      <Detail name={"hyunseo"} postTitle={"hyunseo_5reason-to-use-graphql"} />
    </div>
  );
};

export default App;
