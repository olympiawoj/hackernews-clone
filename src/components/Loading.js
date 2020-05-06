import React from "react";
import { ThemeConsumer } from "../contexts/theme"

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.text
    };
  }

  componentDidMount() {
    console.log("CDM running in Loading");
    const { text } = this.state;

    this.interval = window.setInterval(() => {
      console.log("running every 1s");
      this.state.content === text + "..."
        ? this.setState({ content: text })
        : this.setState(({ content }) => ({
          content: content + "."
        }));
    }, 300);
  }

  //bc this is a loading page, we can clear the interval when the component unmounts
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div className={theme}>
            <h2 className={` center text-light-${theme}`}>{this.state.content}</h2>
          </div >
        )}
      </ThemeConsumer>
    );
  }
}

export default Loading;
