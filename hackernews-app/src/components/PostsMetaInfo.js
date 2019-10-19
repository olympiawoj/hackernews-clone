import React from "react";
import { Link } from "react-router-dom";
import { formatDate, formatDatetime } from "../utils/helpers";
import { ThemeConsumer } from "../contexts/theme"

export default function PostMetaInfo({ by, time, id, decendants }) {
  let date = formatDate(time);
  let dateTime = formatDatetime(time);

  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div>
          <p className={`postMetaText  text-${theme}`} >
            by <Link className="postLink" to={`/user?id=${by}`}>{by}</Link> on {date}, {dateTime} with {' '}
            <Link className="postLink" to={`/post?id=${id}`}>{decendants}</Link> comments
  </p>
        </div>
      )}
    </ThemeConsumer>
  );
}
