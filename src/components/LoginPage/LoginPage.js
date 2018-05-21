import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super();
  }

  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired
  };

  render() {
    const { username, password } = this.state;
    const { isAuth } = this.props;
    if (isAuth) {
      return <Redirect to="/profile" />;
    }
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
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
