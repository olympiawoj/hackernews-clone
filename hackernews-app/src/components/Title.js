import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

export default function Title({ url, title, id }) {
  // console.log(url)
  return url ? (
    <a className="postTitle" href={url}>{title}</a>
  ) : (
      <Link className="postTitle" to={`post?id=${id}`}>{title}</Link>
    );
}
