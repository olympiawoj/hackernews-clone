import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <Link to="/">Top</Link>
      <Link to="/new">New</Link>
    </>
  );
}
