import React from "react";
import PropTypes from "prop-types";

class ProfilePage extends React.Component {
  constructor(props) {
    super();
  }
  static propTypes = {
    name: PropTypes.string
  };

  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <h2>Профиль</h2>
        <p>
          Вас зовут: {name}
        </p>
      </React.Fragment>
    );
  }
}

export default ProfilePage;
