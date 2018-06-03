import React from 'react';
import PropTypes from 'prop-types';

const ProfilePage = props => {
  const { name } = props;
  return (
    <React.Fragment>
      <h2>Профиль</h2>
      <p>Вас зовут: {name}</p>
    </React.Fragment>
  );
};

ProfilePage.defaultProps = {
  name: '',
};

ProfilePage.propTypes = {
  name: PropTypes.string,
};

export default ProfilePage;
