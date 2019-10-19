import React from "react";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../contexts/theme"
import "../App.css"

export default function Title({ url, title, id, theme }) {
  // console.log(url)
  return url ?

    (

      <a className={`postTitle title-${theme}`} href={url}>{title}</a>
    ) : (
      <Link className="postTitle" to={`post?id=${id}`}>{title}</Link>
    )

}