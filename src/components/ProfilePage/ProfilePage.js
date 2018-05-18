import React from "react";
import PropTypes from "prop-types";

class ProfilePage extends React.Component {
  constructor(props) {
    super();
  }
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <h2>Профиль</h2>
        <p>
          Вас зовут: {user.name}
        </p>
      </React.Fragment>
    );
  }
}

export default ProfilePage;
