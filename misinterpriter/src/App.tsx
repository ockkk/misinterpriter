import React from "react";
import "./App.css";
<<<<<<< HEAD

import Header from "./Components/Header"

const App: React.FC = () => {
  return <div>
    <Header/>
  </div>;
=======
import Header from "./Components/Header"
import Main from "./Pages/Main"
import { Detail } from "../src/Pages/Detail/Detail";
const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <Main/>
      {/* <Detail /> */}
    </div>
  );
>>>>>>> 324fdb69544aff1e35b2dc22ea4a1cad9075039f
};

export default App;
