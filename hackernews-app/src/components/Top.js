import React from "react";
import { fetchTopItems, fetchStory } from "../utils/api";

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
      loading: false
    };
  }
  componentDidMount() {
    fetchTopItems().then(ids =>
      ids.map(id => {
        fetchStory(id).then(story => {
          this.setState({ topStories: [...this.state.topStories, story] });
        });
      })
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Axios vs. Fetch</h1>
        {this.state.topStories.map(story => {
          const {
            by,
            descendents,
            id,
            kids,
            score,
            time,
            title,
            type,
            url
          } = story;

          var date = new Date(time * 1000).toLocaleDateString("en-US");
          let dateTime = new Date(time * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          });

          return (
            <>
              <h2>{title}</h2>
              <p>
                by {by} on {date} {dateTime}
              </p>
            </>
          );
        })}
      </div>
    );
  }
}

export default Top;
