import React, { Component } from "react";
import styled from "styled-components";
import LinkBtn from "../components/LinkBtn/LinkBtn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../components/MainPage/MainPage";
import { connect } from "react-redux";
import ProfilePageContainer from "./ProfilePageContainer";
import LoginPageContainer from "./LoginPageContainer";
import { logOut } from "../actions/sessionAC";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import NewsPageContainer from "./NewsPageContainer";

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
              <LinkBtn to="/" label={"Главная"} />
              <LinkBtn to="/news" label={"Новости"} />
              {isAuth ? <LinkBtn to="/profile" label={"Профиль"} /> : null}
            </div>
            <div>
              {isAuth
                ? <LinkBtn
                    to="/"
                    label={"Log Out"}
                    logOutHandler={this.logOutHandler}
                  />
                : <LinkBtn to="/login" label={"Log In"} />}
            </div>
          </Header>
          <Content>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/profile" component={ProfilePageContainer} />
              <Route path="/news" component={NewsPageContainer} />
              <Route path="/login" component={LoginPageContainer} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Content>
        </React.Fragment>
      </Router>
    );
  }

  logOutHandler = e => {
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
