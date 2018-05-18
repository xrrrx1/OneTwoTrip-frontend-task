import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  height: 30px;
  width: 100px;
  margin: 5px;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;

class LinkBtn extends Component {
  constructor(props) {
    super();
  }
  static propTypes = {
    label: PropTypes.string.isRequired
  };

  render() {
    const { label } = this.props;
    return (
      <Button>
        <span>
          {label}
        </span>
      </Button>
    );
  }
}

export default LinkBtn;
