import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import ContextButton from '../ContextButton/ContextButton';

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FormSectionDiv = styled.div`
  width: 300px;
  margin: 10px 0;
`;

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #f5f5f5;
  box-shadow: 0 10px 35px -15px rgba(0, 0, 0, 0.2);
  form {
    width: 100%;
  }
`;

const FormHeader = styled.div`
  color: #000000;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Montserrat', sans-serif;
`;

const InputDiv = styled.div`
  width: 100%;
  padding: 5px;
  input {
    padding: 10px;
    font-size: 1em;
    width: 100%;
    border: 2px solid #f5f5f5;
  }
  input:focus {
    border: 2px solid #03a9f4;
    outline: none;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
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
      <ContainerDiv>
        <FormSectionDiv>
          <FormHeader>Login Form</FormHeader>
          <FormDiv>
            <form action="" onSubmit={this.handleSubmit}>
              <InputDiv>
                <input type="text" name="username" placeholder="Имя" onChange={this.handleChange} value={username} />
              </InputDiv>
              <InputDiv>
                <input type="text" name="password" placeholder="Пароль" onChange={this.handleChange} value={password} />
              </InputDiv>
              <ButtonDiv>
                <ContextButton label="Log in" type="submit" />
              </ButtonDiv>
            </form>
          </FormDiv>
        </FormSectionDiv>
      </ContainerDiv>
    );
  }
}

export default LoginPage;
