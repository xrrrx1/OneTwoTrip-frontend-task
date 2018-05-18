import React from "react";

class ProfilePage extends React.Component {
  constructor(props) {
    super();
  }
  static propTypes = {};

  render() {
    return (
      <React.Fragment>
        <h2>Профиль</h2>
        <p>Вас зовут: </p>
      </React.Fragment>
    );
  }
}

export default ProfilePage;
