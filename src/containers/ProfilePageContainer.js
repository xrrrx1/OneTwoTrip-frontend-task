import React from "react";
import { connect } from "react-redux";
import ProfilePage from "../components/ProfilePage/ProfilePage";

class ProfilePageContainer extends React.Component {
  render() {
    const { user } = this.props;
    return <ProfilePage user={user} />;
  }
}

export default connect(
  store => ({
    user: store.session.user
  }),
  {}
)(ProfilePageContainer);
