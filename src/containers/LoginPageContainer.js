import React from "react";
import { connect } from "react-redux";
import LoginPage from "../components/LoginPage/LoginPage";
import { accessToken } from "../actions/sessionAC";

class LoginPageContainer extends React.Component {
  render() {
    const { accessToken } = this.props;
    return <LoginPage accessToken={accessToken} />;
  }
}

export default connect(
  store => ({
    name: store.session.name
  }),
  { accessToken }
)(LoginPageContainer);
