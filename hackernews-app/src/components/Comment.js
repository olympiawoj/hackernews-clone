import React from "react";
import PostMetaInfo from "./PostsMetaInfo";

export default function Comment(props) {
  console.log(props.comment);
  const { comment } = props;
  return (
    <div className="post">
      <PostMetaInfo
        comment={true}
        by={comment.by}
        time={comment.time}
        id={comment.id}
      ></PostMetaInfo>
      <p dangerouslySetInnerHTML={{ __html: comment.text }}></p>
    </div>
  );
}
