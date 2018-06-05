import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  margin: 5px 0;
  padding: 5px 15px;
  color: palevioletred;
  outline: none;
  font-size: 0.8em;
  font-weight: 600;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid palevioletred;
  cursor: pointer;
  :hover {
    color: mediumvioletred;
    border-color: mediumvioletred;
    outline: none;
  }
`;

const ContextButton = props => {
  const { label, reset, type, editUser } = props;
  return (
    <Button onClick={reset || editUser} type={type}>
      <span>{label}</span>
    </Button>
  );
};

ContextButton.defaultProps = {
  type: 'button',
  reset: null,
  editUser: null,
};

ContextButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  reset: PropTypes.func,
  editUser: PropTypes.func,
};

export default ContextButton;
