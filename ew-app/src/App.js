import React from 'react';
import { Route, Link } from "react-router-dom";
import Home from "../src/components/Home";
import "./App.scss";
// import Recipe from "../src/components/Recipe";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      {/* <Route exact path=`/{}` component={Recipe} /> */}
    </div>
  );
}

export default App;
