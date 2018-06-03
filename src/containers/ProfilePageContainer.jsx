import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfilePage from '../components/ProfilePage/ProfilePage';
import profileNameSelector from '../selectors/profileNameSelector';

const ProfilePageContainer = props => {
  const { name, isAuth } = props;
  if (!isAuth) {
    return <Redirect to="/" />;
  }
  return <ProfilePage name={name} />;
};

ProfilePageContainer.defaultProps = {
  name: '',
};

ProfilePageContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default connect(
  store => ({
    name: profileNameSelector(store),
    isAuth: Boolean(profileNameSelector(store)),
  }),
  {},
)(ProfilePageContainer);
