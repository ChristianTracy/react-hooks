import React from "react";
import { Route } from "react-router-dom";
import Landing from "./modules/landing/Landing";
import Example1 from "./modules/example1/Example1";
import Example2 from "./modules/example2/Example2";

const ViewsContainer = () => (
  <div className="views-container">
    <Route path="/" exact component={Landing} />
    <Route path="/example1" component={Example1} />
    <Route path="/example2" component={Example2} />
  </div>
);

export default ViewsContainer;
