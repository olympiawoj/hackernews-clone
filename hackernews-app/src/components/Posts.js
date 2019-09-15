import React from "react";
import { fetchStories, fetchStory } from "../utils/api";
import Loading from "./Loading";

var moment = require("moment");

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
      loading: true
    };
  }
  componentDidMount() {
    console.log("cdm running top");
    fetchStories(this.props.type)
      .then(topStories => {
        this.setState({
          topStories: topStories,
          loading: false
        });
      })
      .catch(error => {
        console.log("error");
      });
  }

  render() {
    if (this.state.loading === true) {
      return <Loading text="Battling" />;
    }
    return (
      <div className="App">
        <h1>Axios vs. Fetch</h1>
        {this.state.topStories.map(story => {
          console.log(story);
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
            <div key={id}>
              <h2>{title}</h2>
              <p>
                by {by} on {date}, {dateTime} with {descendants} comments
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Top;
