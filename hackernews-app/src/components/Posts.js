import React from "react";
import { fetchStories } from "../utils/api";
import Loading from "./Loading";
import PostsList from "./PostsList";

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: false
    };
  }
  componentDidMount() {
    console.log("cdm running top");
    fetchStories(this.props.type)
      .then(posts => {
        this.setState({
          posts: posts,
          loading: false
        });
      })
      .catch(error => {
        console.log("error");
        this.setState({
          loading: false,
          error: true
        });
      });
  }

  render() {
    const { posts, error, loading } = this.state;
    if (loading === true) {
      return <Loading text="Battling" />;
    }

    if (error === true) {
      return <h1>Failed to fetch {this.props.type} stories</h1>;
    }

    return (
      <div className="App">
        <h1>Axios vs. Fetch</h1>
        <PostsList posts={posts}></PostsList>
      </div>
    );
  }
}

export default Top;
