import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Top from "./components/Top";
import Nav from "./components/Nav";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <Router>
        <div className="App">
          <Nav></Nav>
          <Route exact path="/" component={Top}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
