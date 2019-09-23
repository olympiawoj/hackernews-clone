import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link className="nav-link" to="/">
        Top
      </Link>
      <Link className="nav-link" to="/new">
        New
      </Link>
    </div>
  );
}
