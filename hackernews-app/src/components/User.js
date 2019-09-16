import React from "react";
import { getUser } from "../utils/api";
import queryString from "query-string";

export default class User extends React.Component {
  componentDidMount() {
    // console.log("location search", this.props.location.search);
    //every component rendered by React Router will be passed the same 3 props from the React Router API - match, location, & history
    console.log(this.props);
    const { username } = queryString.parse(this.props.location.search);

    return getUser(username).then(userInfo => console.log(userInfo));
  }
  render() {
    return <h1>hello</h1>;
  }
}
