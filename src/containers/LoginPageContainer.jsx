import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage/LoginPage';
import { logIn } from '../actions/sessionAC';
import profileNameSelector from '../selectors/profileNameSelector';

const LoginPageContainer = props => {
  const { isAuth } = props;
  return <LoginPage logIn={props.logIn} isAuth={isAuth} />;
};

LoginPageContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logIn: PropTypes.func.isRequired,
};

export default connect(
  store => ({
    isAuth: Boolean(profileNameSelector(store)),
  }),
  { logIn },
)(LoginPageContainer);