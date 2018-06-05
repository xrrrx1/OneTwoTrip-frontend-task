import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.a`
  text-align: center;
`;

const ProfilePage = props => {
  const { name } = props;
  return (
    <StyledDiv>
      <h2>Профиль</h2>
      <p>Вас зовут: {name}</p>
    </StyledDiv>
  );
};

ProfilePage.defaultProps = {
  name: '',
};

ProfilePage.propTypes = {
  name: PropTypes.string,
};

export default ProfilePage;
