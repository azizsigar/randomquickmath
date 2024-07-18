import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import RandomComponent from "../comps/RandomComp.jsx";

function App() {
  return (
    <div className="main">
      <div>
        <Toaster />
      </div>
      <h1>Quick Math</h1>
      <RandomComponent />
    </div>
  );
}

export default App;
