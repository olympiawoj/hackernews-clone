import React from "react";
import { Link } from "react-router-dom";
import { formatDate, formatDatetime } from "../utils/helpers";

export default function PostMetaInfo({ by, time, id, descendants }) {
  let date = formatDate(time);
  let dateTime = formatDatetime(time);

  return (
    <div>
      <p className="postMetaText">
        by <Link className="postLink" to={`/user?id=${by}`}>{by}</Link> on {date}, {dateTime} with{" "}
        <Link className="postLink" to={`/post?id=${id}`}>{descendants}</Link> comments
      </p>
    </div>
  );
}
