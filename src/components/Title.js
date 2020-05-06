import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
import { ThemeConsumer } from "../contexts/theme"

export default function Title({ url, title, id, comments }) {
  // console.log(url)
  let className
  if (!comments) {
    className = "postTitle"
  } else {
    className = "postCommentTitle"
  }
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div>
          {url ?

            (

              <a className={`${className} title-${theme}`} href={url}>{title}</a>
            ) : (
              <Link className={`${className} title-${theme}`} to={`post?id=${id}`}>{title}</Link>
            )}
        </div>
      )}
    </ThemeConsumer>
  )

}