import React from "react";
import Loading from "./Loading";
import PostsList from "./PostsList";
import { fetchUser, fetchItem, fetchPosts } from "../utils/api";
import { formatDate, formatDatetime } from "../utils/helpers";
import queryString from "query-string";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingUser: true,
      userInfo: null,
      posts: null,
      loadingPosts: true
    };
  }
  componentDidMount() {
    // console.log("location search", this.props.location.search);
    //every component rendered by React Router will be passed the same 3 props from the React Router API - match, location, & history
    console.log(this.props);
    const { id } = queryString.parse(this.props.location.search);
    // console.log("id", id);

    fetchUser(id)
      .then(userInfo => {
        console.log(userInfo);
        //userInfo is an object w/ created, id, karma, and submitted

        this.setState({
          userInfo,
          loadingUser: false
        });
        return fetchPosts(userInfo.submitted.slice(0, 30));
      })
      .then(posts => {
        this.setState({ posts, loadingPosts: false, loadingUser: false });
      });
  }

  render() {
    const { loadingUser, userInfo, posts, loadingPosts } = this.state;
    console.log("user info", userInfo);
    //userInfo has about, created, id, karma,  and submitted which is an array of story IDs

    return (
      <>
        {loadingUser === true ? (
          <Loading text="Fetching user"></Loading>
        ) : (
            <div className="postsContainer">
              <h1>{userInfo.id}</h1>
              <p className="postMetaText">
                <strong>joined {formatDate(userInfo.created)},{" "}
                  {formatDatetime(userInfo.created)}</strong> has <strong>{userInfo.karma} karma</strong>
              </p>
              <p dangerouslySetInnerHTML={{ __html: userInfo.about }} />

              <h1>Posts</h1>

              {loadingPosts === true ? (
                <Loading text="Fetching Posts"></Loading>
              ) : (

                  <PostsList posts={posts}></PostsList>

                )}
            </div>
          )}
      </>
    );
  }
}
