import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ViewsContainer from "./ViewsContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/example1/">Example1</Link>
              </li>
              <li>
                <Link to="/example2/">Example2</Link>
              </li>
            </ul>
          </nav>
          <ViewsContainer />
        </div>
      </Router>
    );
  }
}

export default App;
