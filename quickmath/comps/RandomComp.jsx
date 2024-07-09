import React from "react";
import Q1 from './Q1.jsx';
import Q2 from './Q2.jsx';
import Q3 from './Q3.jsx';
import Q4 from './Q4.jsx';

const RandomComponent = () => {
  const components = [Q1, Q2, Q3, Q4];
  const randomIndex = Math.floor(Math.random() * components.length);
  const SelectedComponent = components[randomIndex];

  return <SelectedComponent />;
};

export default RandomComponent;
