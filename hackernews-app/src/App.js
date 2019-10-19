import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts.js";
import Nav from "./components/Nav";
import User from "./components/User";
import Post from "./components/Post";
import { ThemeProvider } from "./contexts/theme"

class App extends React.Component {
  state = {
    theme: "light",
    // we're going to stick method responsible for toggling theme on state object itself
    // b/c we're updating the state based on prev state, we'll pass a function to setState
    // this will give us the current theme, and what we return is an object w/ a theme property
    //parenthesis for implicit return of object

  }

  toggleTheme = () => {
    //this is functional setState. B/c this.state may be updated asynchronously,
    //you shouldn't rely on their values for calculating the next state
    //the function will rec the prev state as the first arg and the props at the time the update is applied
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light"
    }))
    // console.log('togglings')
  }

  // componentDidMount() { }
  render() {
    return (
      //Pass in value to ThemeProvider that will be consumed b y Consumer
      <ThemeProvider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
        <Router>
          <div className="App">
            <Nav></Nav>
            <Route
              exact
              path="/"
              render={() => <Posts type="top"></Posts>}
            >
            </Route>
            <Route
              exact
              path="/new"
              render={() => <Posts type="new"></Posts>}
            >
            </Route>
            <Route path="/post" component={Post}></Route>
            <Route path="/user" component={User}></Route>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
