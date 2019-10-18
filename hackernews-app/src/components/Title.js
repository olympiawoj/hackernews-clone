import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

export default function Title({ url, title, id }) {
  return url ? (
    <a className="postTitle" href={url}>{title}</a>
  ) : (
      <Link to={`post?id:${id}`}>{title}</Link>
    );
}
