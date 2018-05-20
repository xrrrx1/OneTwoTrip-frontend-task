import React from "react";
import { connect } from "react-redux";
import LoginPage from "../components/LoginPage/LoginPage";
import { logIn } from "../actions/sessionAC";

class LoginPageContainer extends React.Component {
  render() {
    const { logIn, isAuth } = this.props;
    return <LoginPage logIn={logIn} isAuth={isAuth} />;
  }
}

export default connect(
  store => ({
    isAuth: Boolean(store.session.name)
  }),
  { logIn }
)(LoginPageContainer);
