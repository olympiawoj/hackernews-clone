import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts.js";
import Nav from "./components/Nav";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <Router>
        <div className="App">
          <Nav></Nav>
          <Route
            exact
            path="/"
            render={() => <Posts type="top"></Posts>}
          ></Route>
          <Route
            exact
            path="/new"
            render={() => <Posts type="new"></Posts>}
          ></Route>
        </div>
      </Router>
    );
  }
}

export default App;
