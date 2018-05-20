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
    const { isAuth } = this.props;
    return isAuth
      ? <div>
          <span>Вы успешно авторизированны!</span>
        </div>
      : <React.Fragment>
          <form action="" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder={"Имя"}
              onChange={this.handleChange}
              value={username}
            />
            <input
              type="text"
              name="password"
              placeholder={"Пароль"}
              onChange={this.handleChange}
              value={password}
            />
            <button type="submit">Log in</button>
          </form>
        </React.Fragment>;
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { logIn } = this.props;
    logIn({
      name: username,
      password: password
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}

export default LoginPage;
