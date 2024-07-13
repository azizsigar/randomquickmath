import React from "react";
import "./App.css";
import { Toaster } from 'react-hot-toast';
import RandomComponent from "../comps/RandomComp.jsx";
import Q1 from "../comps/Q1.jsx";


function App() {

  return (
    <div className="main">
<div><Toaster/></div>
    <Q1 />
    {/* <RandomComponent /> */}
    </div>
  );
}

export default App;
