import React from "react";
import { connect } from "react-redux";
import ProfilePage from "../components/ProfilePage/ProfilePage";

class ProfilePageContainer extends React.Component {
  render() {
    const { name } = this.props;
    return <ProfilePage name={name} />;
  }
}

export default connect(
  store => ({
    name: store.session.name
  }),
  {}
)(ProfilePageContainer);
