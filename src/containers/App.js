import React, { Component } from "react";
import styled from "styled-components";
import LinkBtn from "../components/LinkBtn/LinkBtn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../components/MainPage/MainPage";
import NewsPage from "../components/NewsPage/NewsPage";
import { connect } from "react-redux";
import ProfilePageContainer from "./ProfilePageContainer";
import LoginPageContainer from "./LoginPageContainer";

const Header = styled.div`
  border: 1px gray solid;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`margin: 10px;`;

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header>
            <div>
              <LinkBtn to="/main" label={"Главная"} />
              <LinkBtn to="/profile" label={"Профиль"} />
              <LinkBtn to="/news" label={"Новости"} />
            </div>
            <div>
              <LinkBtn to="/login" label={"Log In"} />
            </div>
          </Header>
          <Content>
            <Switch>
              <Route path="/profile" component={ProfilePageContainer} />
              <Route path="/news" component={NewsPage} />
              <Route path="/login" component={LoginPageContainer} />
              <Route path="*" component={MainPage} />
            </Switch>
          </Content>
        </React.Fragment>
      </Router>
    );
  }
}

export default connect(store => ({
  isAuth: store.session.user
}))(App);
