import React from "react";
import { Link } from "react-router-dom";
import { formatDate, formatDatetime } from "../utils/helpers";
import { ThemeConsumer } from "../contexts/theme"

export default function PostMetaInfo({ by, time, id, decendants, comment }) {
  let date = formatDate(time);
  let dateTime = formatDatetime(time);

  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div>
          {!comment ? (
            <p className={`postMetaText  text-${theme}`} >
              by <Link className={`postLink link-${theme}`} to={`/user?id=${by}`}>{by}</Link> on {date}, {dateTime} with {' '}
              <Link className={`postLink link-${theme}`} to={`/post?id=${id}`}>{decendants}</Link> comments
            </p>
          ) : (
              <p className={`postMetaText  text-${theme}`} >
                by <Link className={`postLink link-${theme}`} to={`/user?id=${by}`}>{by}</Link> on {date}, {dateTime}
              </p>
            )}
        </div>
      )}
    </ThemeConsumer>
  );
}
