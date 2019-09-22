import React from "react";
import queryString from "query-string";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingPost: true
    };
  }

  componentDidMount() {
    // console.log("location search", this.props.location.search);
    //every component rendered by React Router will be passed the same 3 props from the React Router API - match, location, & history
    console.log("mounted");
    console.log(this.props);
    const { id } = queryString.parse(this.props.location.search);
    console.log("id", id);
  }

  render() {
    return (
      <>
        <h1>I am returning a post</h1>
      </>
    );
  }
}
