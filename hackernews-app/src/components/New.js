import React from "react";
import { fetchStories, fetchStory } from "../utils/api";

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newStories: []
    };
  }

  //   componentDidMount() {
  //     fetchStories("new").then(id => {
  //       fetchStory(id);
  //     });
  //   }
  render() {
    return <h1>New is returning</h1>;
  }
}

export default New;
