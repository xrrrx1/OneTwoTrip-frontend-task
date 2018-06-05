import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled.a`
  display: block;
  font-size: 1em;
  padding: 1.4em 1em;
  color: #000000;
  font-family: inherit;
  white-space: nowrap;
  :hover,
  :focus {
    background-color: #f5f5f5;
  }
`;

const NavLinkLink = props => {
  const { to, label } = props;
  return (
    <Link to={to}>
      <StyledLink>
        <span>{label}</span>
      </StyledLink>
    </Link>
  );
};

NavLinkLink.defaultProps = {};

NavLinkLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLinkLink;
