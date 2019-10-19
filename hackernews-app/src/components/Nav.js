import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeConsumer } from "../contexts/theme"


export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <div className="nav">
            <NavLink activeClassName="active" className="nav-link" exact to="/">
              Top
        </NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/new">
              New
        </NavLink>
            {/* VSCode use : and then start searching for emoji */}
            <button className="btn-clear " style={{ fontSize: 30 }} onClick={toggleTheme} >
              {theme === "light" ? "🔦" : "💡"}
            </button>

          </div>)
      }}
    </ThemeConsumer>
  );
}
