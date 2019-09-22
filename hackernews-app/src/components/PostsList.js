import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import PostMetaInfo from "./PostsMetaInfo";

export default function PostsList({ posts }) {
  if (posts.length === 0) {
    return <p>This user hasn't posted yet</p>;
  }
  return (
    <ul>
      {posts.map(post => {
        const { title, id, url, by, descendants, time, type } = post;
        console.log("type of post", type);
        return (
          <li key={id}>
            <Title url={url} title={post.title} id={post.id}></Title>
            <PostMetaInfo
              by={by}
              time={time}
              id={id}
              descendants={descendants}
            ></PostMetaInfo>
          </li>
        );
      })}
    </ul>
  );
}
