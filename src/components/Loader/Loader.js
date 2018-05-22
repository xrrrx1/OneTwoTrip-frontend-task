import React, { Component } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  color: grey;
`;

class Loader extends Component {
  static propTypes = {};

  render() {
    return (
      <LoaderContainer>
        <span>Loading</span>
        <ReactLoading type={"bubbles"} color={"grey"} />
      </LoaderContainer>
    );
  }
}

export default Loader;
