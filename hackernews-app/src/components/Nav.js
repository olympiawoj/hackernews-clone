import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <NavLink activeClassName="active" className="nav-link" exact to="/">
        Top
      </NavLink>
      <NavLink activeClassName="active" className="nav-link" to="/new">
        New
      </NavLink>
    </div>
  );
}
