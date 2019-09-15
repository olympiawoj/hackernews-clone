import React from "react";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "Loading"
    };
  }

  componentDidMount() {
    console.log("CDM running in Loading");

    this.interval = window.setInterval(() => {
      console.log("running every 1s");
      this.state.content === "Loading..."
        ? this.setState({ content: "Loading" })
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
      <>
        <h1>{this.state.content}</h1>
        <h2>Hi</h2>
      </>
    );
  }
}

export default Loading;
