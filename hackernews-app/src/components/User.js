import React from "react";
import Loading from "./Loading";
import { getUser } from "../utils/api";
import { formatDate, formatDatetime } from "../utils/helpers";
import queryString from "query-string";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingUser: true,
      userInfo: null
    };
  }
  componentDidMount() {
    this.setState({ loadingUser: true });
    // console.log("location search", this.props.location.search);
    //every component rendered by React Router will be passed the same 3 props from the React Router API - match, location, & history
    console.log(this.props);
    const { id } = queryString.parse(this.props.location.search);
    console.log("id", id);

    return getUser(id).then(userInfo => {
      console.log(userInfo);
      this.setState({ userInfo, loadingUser: false });
    });
  }

  render() {
    const { loadingUser, userInfo } = this.state;
    console.log("user info", userInfo);

    return (
      <>
        {loadingUser === true ? (
          <Loading></Loading>
        ) : (
          <>
            <h1>{userInfo.id}</h1>
            <p>
              joined {formatDate(userInfo.created)},{" "}
              {formatDatetime(userInfo.created)} has {userInfo.karma} karma
            </p>
            <p dangerouslySetInnerHTML={{ __html: userInfo.about }} />
          </>
        )}
      </>
    );
  }
}
