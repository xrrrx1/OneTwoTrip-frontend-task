import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage/LoginPage';
import { logIn } from '../actions/sessionAC';
import profileNameSelector from '../selectors/profileNameSelector';

@connect(
  store => ({
    isAuth: Boolean(profileNameSelector(store)),
  }),
  { logIn },
)
class LoginPageContainer extends PureComponent {
  render() {
    const { isAuth } = this.props;
    return <LoginPage logIn={this.props.logIn} isAuth={isAuth} />;
  }
}

LoginPageContainer.propTypes = {
  isAuth: PropTypes.bool,
  logIn: PropTypes.func,
};

LoginPageContainer.defaultProps = {
  isAuth: null,
  logIn: null,
};

export default LoginPageContainer;
