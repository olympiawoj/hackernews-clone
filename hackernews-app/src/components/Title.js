import React from "react";
import { Link } from "react-router-dom";

export default function Title({ url, title, id }) {
  return url ? (
    <a href={url}>{title}</a>
  ) : (
    <Link to={`post?id:${id}`}>{title}</Link>
  );
}
