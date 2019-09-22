import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts.js";
import Nav from "./components/Nav";
import User from "./components/User";
import Post from "./components/Post";

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
          <Route path="/post" component={Post}></Route>
          <Route path="/user" component={User}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
