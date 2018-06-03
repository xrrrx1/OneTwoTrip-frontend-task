import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinkBtn from '../components/LinkBtn/LinkBtn';
import MainPage from '../components/MainPage/MainPage';
import ProfilePageContainer from './ProfilePageContainer';
import LoginPageContainer from './LoginPageContainer';
import { logOut } from '../actions/sessionAC';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import NewsPageContainer from './NewsPageContainer';

const Header = styled.div`
  border: 1px gray solid;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  margin: 10px;
`;

class App extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired,
  };

  logOutHandler = e => {
    e.preventDefault();
    this.props.logOut();
  };
  render() {
    const { isAuth } = this.props;
    return (
      <Router>
        <React.Fragment>
          <Header>
            <div>
              <LinkBtn to="/" label="Главная" />
              <LinkBtn to="/news" label="Новости" />
              {isAuth ? <LinkBtn to="/profile" label="Профиль" /> : null}
            </div>
            <div>
              {isAuth ? (
                <LinkBtn to="/" label="Log Out" logOutHandler={this.logOutHandler} />
              ) : (
                <LinkBtn to="/login" label="Log In" />
              )}
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
}

export default connect(
  store => ({
    isAuth: Boolean(store.session.name),
  }),
  { logOut },
)(App);
