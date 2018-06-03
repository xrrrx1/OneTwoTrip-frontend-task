import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfilePage from '../components/ProfilePage/ProfilePage';

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
    name: store.session.name,
    isAuth: Boolean(store.session.name),
  }),
  {},
)(ProfilePageContainer);
