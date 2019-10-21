import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import PostMetaInfo from "./PostsMetaInfo";
import { ThemeConsumer } from "../contexts/theme"

export default function PostsList({ posts }) {
  if (posts.length === 0) {
    return <p>This user hasn't posted yet</p>;
  }



  return (
    <ThemeConsumer>
      {({ theme }) => (
        <ul className={`bg-${theme}`}>
          {posts.map(post => {
            const { title, id, url, by, descendants, time, type } = post;
            // console.log("type of post", type);

            return (

              <li key={id} >
                <Title url={url} title={title} id={id} theme={theme} ></Title>
                <PostMetaInfo
                  by={by}
                  time={time}
                  id={id}
                  decendants={descendants}
                ></PostMetaInfo>
              </li>
            )

          })}
        </ul>
      )}
    </ThemeConsumer>

  );
}
