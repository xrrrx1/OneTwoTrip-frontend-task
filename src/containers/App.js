import React, { Component } from "react";
import styled from "styled-components";
import LinkBtn from "../components/LinkBtn/LinkBtn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../components/MainPage/MainPage";
import NewsPage from "../components/NewsPage/NewsPage";
import { connect } from "react-redux";
import ProfilePageContainer from "./ProfilePageContainer";
import LoginPageContainer from "./LoginPageContainer";
import { logOut } from "../actions/sessionAC";

const Header = styled.div`
  border: 1px gray solid;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`margin: 10px;`;

class App extends Component {
  render() {
    const { isAuth } = this.props;
    return (
      <Router>
        <React.Fragment>
          <Header>
            <div>
              <LinkBtn to="/main" label={"Главная"} />
              <LinkBtn to="/news" label={"Новости"} />
              {isAuth ? <LinkBtn to="/profile" label={"Профиль"} /> : null}
            </div>
            <div>
              {isAuth
                ? <LinkBtn
                    to="/main"
                    label={"Log Out"}
                    onClick={this.handleClick}
                  />
                : <LinkBtn to="/login" label={"Log In"} />}
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

  handleClick = e => {
    const { logOut } = this.props;
    e.preventDefault();
    logOut();
  };
}

export default connect(
  store => ({
    isAuth: Boolean(store.session.name)
  }),
  { logOut }
)(App);
