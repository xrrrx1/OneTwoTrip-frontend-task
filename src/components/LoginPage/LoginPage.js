import React from "react";

class LoginPage extends React.Component {
  constructor(props) {
    super();
  }
  static propTypes = {};

  render() {
    return (
      <React.Fragment>
        <form action="">
          <input type="text" />
          <input type="text" />
          <button type="submit">Log in</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginPage;
