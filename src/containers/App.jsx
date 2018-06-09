import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinkBtn from '../components/LinkBtn/LinkBtn';
import MainPage from '../components/MainPage/MainPage';
import ProfilePageContainer from './ProfilePageContainer';
import LoginPageContainer from './LoginPageContainer';
import { logOut } from '../actions/sessionAC';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import NewsPageContainer from './NewsPageContainer';
import NavLinkLink from '../components/NavLink/NavLink';

const Header = styled.div`
  font-family: 'Montserrat', sans-serif;
  border: 1px solid #f5f5f5;
  box-shadow: 0 10px 35px -15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  a {
    text-decoration: none !important;
  }
`;

const HeadersContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const LinksDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonDiv = styled.div``;

const Content = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin: 10px;
`;

@connect(
  store => ({
    isAuth: Boolean(store.session.name),
  }),
  { logOut },
)
class App extends PureComponent {
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
      <HashRouter>
        <React.Fragment>
          <Header>
            <HeadersContent>
              <LinksDiv>
                <NavLinkLink to="/" label="Главная" />
                <NavLinkLink to="/news" label="Новости" />
                {isAuth ? <NavLinkLink to="/profile" label="Профиль" /> : null}
              </LinksDiv>
              <ButtonDiv>
                {isAuth ? (
                  <LinkBtn to="/" label="Log Out" logOutHandler={this.logOutHandler} />
                ) : (
                  <LinkBtn to="/login" label="Log In" />
                )}
              </ButtonDiv>
            </HeadersContent>
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
      </HashRouter>
    );
  }
}

export default App;
