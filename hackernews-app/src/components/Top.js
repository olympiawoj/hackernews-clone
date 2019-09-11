import React from "react";
import { fetchTopItems, fetchStory } from "../utils/api";

class Top extends React.Component {
  componentDidMount() {
    fetchTopItems().then(ids =>
      ids.map(id => {
        fetchStory(id).then(res => console.log(res));
      })
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Axios vs. Fetch</h1>
      </div>
    );
  }
}

export default Top;
