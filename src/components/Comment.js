import React from "react";
import PostMetaInfo from "./PostsMetaInfo";
import { ThemeConsumer } from "../contexts/theme"

export default function Comment(props) {
  console.log(props.comment);
  const { comment } = props;
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`post bg-medium-${theme}`}>
          <PostMetaInfo
            comment={true}
            by={comment.by}
            time={comment.time}
            id={comment.id}
            className={`bg-medium-${theme}`}
          ></PostMetaInfo>
          <p className={`text-light-${theme}`} dangerouslySetInnerHTML={{ __html: comment.text }} ></p>
        </div>
      )
      }
    </ThemeConsumer >

  );
}
