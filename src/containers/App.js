import React, { Component } from "react";
import styled from "styled-components";
import LinkBtn from "../components/LinkBtn/LinkBtn";

const Header = styled.div`
  border: 1px gray solid;
  display: flex;
  justify-content: space-between;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <div>
            <LinkBtn label={"Главная"} />
            <LinkBtn label={"Профиль"} />
            <LinkBtn label={"Новости"} />
          </div>
          <div>
            <LinkBtn label={"Log In"} />
          </div>
        </Header>
        <div>Content</div>
      </div>
    );
  }
}

export default App;
