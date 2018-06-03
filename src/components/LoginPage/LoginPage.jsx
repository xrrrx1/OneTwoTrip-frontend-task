import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 5px;
  input:focus {
    background: lightgray;
    outline: none;
  }
`;

class LoginPage extends React.Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { logIn } = this.props;
    logIn({
      name: username,
      password,
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
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
          <StyledDiv>
            <input type="text" name="username" placeholder="Имя" onChange={this.handleChange} value={username} />
          </StyledDiv>
          <StyledDiv>
            <input type="text" name="password" placeholder="Пароль" onChange={this.handleChange} value={password} />
          </StyledDiv>
          <StyledDiv>
            <button type="submit">Log in</button>
          </StyledDiv>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginPage;
