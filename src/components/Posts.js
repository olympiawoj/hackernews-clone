import React from "react";
import { fetchStories } from "../utils/api";
import Loading from "./Loading";
import PostsList from "./PostsList";
import { ThemeConsumer } from "../contexts/theme"

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
    //this is where my error is happening...


    if (error === true) {
      return <h1>Failed to fetch {this.props.type} stories</h1>;
    }

    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div className={`postsContainer bg-${theme}`}>
            {(loading === true) ? <Loading text="Loading" /> : null
            }
            <PostsList posts={posts}></PostsList>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

export default Top;
