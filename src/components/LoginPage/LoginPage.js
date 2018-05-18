import React from "react";

class LoginPage extends React.Component {
  constructor(props) {
    super();
  }

  state = {
    username: "",
    password: ""
  };

  static propTypes = {};

  render() {
    const { username, password } = this.state;
    return (
      <React.Fragment>
        <form action="">
          <input type="text" placeholder={"Имя"} />
          <input type="text" placeholder={"Пароль"} />
          <button type="submit">Log in</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginPage;
