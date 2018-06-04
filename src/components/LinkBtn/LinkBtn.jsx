import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  height: 30px;
  width: 100px;
  margin: 5px;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;

const LinkBtn = props => {
  const { to, label, logOutHandler } = props;
  return (
    <Link to={to}>
      <Button onClick={logOutHandler}>
        <span>{label}</span>
      </Button>
    </Link>
  );
};

LinkBtn.defaultProps = {
  logOutHandler: undefined,
};

LinkBtn.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  logOutHandler: PropTypes.func,
};

export default LinkBtn;
