import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  padding: 10px 30px;
  color: palevioletred;
  font-size: 1em;
  font-weight: 600;
  outline: none;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid palevioletred;
  margin: 10px;
  cursor: pointer;
  :hover {
    color: mediumvioletred;
    border-color: mediumvioletred;
    outline: none;
  }
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
