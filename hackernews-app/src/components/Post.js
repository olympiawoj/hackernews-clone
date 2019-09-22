import React from "react";

import Loading from "./Loading";
import Title from "./Title";
import Comment from "./Comment";
import PostMetaInfo from "./PostsMetaInfo";
import queryString from "query-string";
import { fetchItem, fetchComments } from "../utils/api";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
      post: null,
      loadingPost: true,
      loadingComments: true
    };
  }

  componentDidMount() {
    // console.log("location search", this.props.location.search);
    //every component rendered by React Router will be passed the same 3 props from the React Router API - match, location, & history
    console.log("mounted");
    console.log(this.props);
    const { id } = queryString.parse(this.props.location.search);
    console.log("id", id);
    fetchItem(id)
      .then(post => {
        this.setState({ post, loadingPost: false });
        return fetchComments(post.kids || []);
      })
      .then(comments => {
        this.setState({ comments, loadingComments: false });
        console.log("comments", comments);
      });
  }

  render() {
    const { post, loadingPost, loadingComments } = this.state;

    return (
      <>
        {loadingPost === true ? (
          <Loading text="Fetching post"></Loading>
        ) : (
          <div>
            <h1>
              <Title url={post.url} title={post.title} id={post.id}></Title>
            </h1>
            <PostMetaInfo
              by={post.by}
              time={post.time}
              id={post.id}
              decendants={post.descendants}
            ></PostMetaInfo>
            <p dangerouslySetInnerHTML={{ __html: post.text }} />
          </div>
        )}
        {loadingComments === true ? (
          <Loading></Loading>
        ) : (
          <>
            {this.state.comments.map(comment => {
              return <Comment key={comment.id} comment={comment}></Comment>;
            })}
          </>
        )}
      </>
    );
  }
}
