import React from "react";
import { Link } from "react-router-dom";
import { formatDate, formatDatetime } from "../utils/helpers";

export default function PostMetaInfo({ by, time, id, descendants }) {
  let date = formatDate(time);
  let dateTime = formatDatetime(time);

  return (
    <div>
      <p>
        by <Link to={`/user?id=${by}`}>{by}</Link> on {date}, {dateTime} with{" "}
        {descendants} comments
      </p>
    </div>
  );
}
