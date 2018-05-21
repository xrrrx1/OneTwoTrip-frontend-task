import React from "react";
import { connect } from "react-redux";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

class ProfilePageContainer extends React.Component {
  constructor(props) {
    super();
  }

  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    name: PropTypes.string
  };

  render() {
    const { name, isAuth } = this.props;
    if (!isAuth) {
      return <Redirect to="/" />;
    }
    return <ProfilePage name={name} />;
  }
}

export default connect(
  store => ({
    name: store.session.name,
    isAuth: Boolean(store.session.name)
  }),
  {}
)(ProfilePageContainer);
