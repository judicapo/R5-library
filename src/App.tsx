import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './views/Main';
import Book from './views/Book';
import GlobalStyle from '@components/styles/global.styled';
import { NavbarComponent, FooterComponent, BodyComponent } from '@components/layout';
import Profile from '@components/user/Profile';
import { useAuth0 } from '@middleware/authorization';

const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <>
      <GlobalStyle />
      <NavbarComponent />
      <BodyComponent>
        <Switch>
          <Route exact path='/' component={Main} />
          {!isLoading && isAuthenticated && (
            <>
              <Route exact path='/profile' component={Profile} />
              <Route path='/book' component={Book} />
            </>
          )}
        </Switch>
      </BodyComponent>
      <FooterComponent />
    </>
  );
};

export default App;
