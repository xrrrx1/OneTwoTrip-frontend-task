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
    return (
      <React.Fragment>
        <form action="">
          <input
            type="text"
            name="username"
            placeholder={"Имя"}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder={"Пароль"}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleDispatch}>
            Log in
          </button>
        </form>
      </React.Fragment>
    );
  }

  handleDispatch = () => {
    this.props.accessToken({
      name: this.state.username,
      password: this.state.password
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}

export default LoginPage;
