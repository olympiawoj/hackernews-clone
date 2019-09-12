import React from "react";
import { fetchTopItems, fetchStory } from "../utils/api";
var moment = require("moment");

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
          //   console.log(story);
          const {
            by,
            descendants,
            id,
            kids,
            score,
            time,
            title,
            type,
            url
          } = story;

          var date = new Date(time * 1000).toLocaleDateString("en-US");
          //   let dateTime = new Date(time * 1000).toLocaleTimeString([], {
          //     hour: "2-digit",
          //     minute: "2-digit"
          //   });

          let dateTime = new Date(time * 1000);
          dateTime = moment(dateTime).format("H:mm A");
          return (
            <>
              <h2>{title}</h2>
              <p>
                by {by} on {date}, {dateTime} with {descendants} comments
              </p>
            </>
          );
        })}
      </div>
    );
  }
}

export default Top;
