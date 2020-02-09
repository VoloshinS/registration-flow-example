import React, { FC, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';

import { Layout, PrivateRoute, AppBar } from './modules/core';
import { RegistrationForm } from './modules/registration';
import { LoginForm } from './modules/login';
import { Profile } from './modules/profile';
import { history } from './store';
import { getIsAuthorized, signOut } from './modules/core/redux/auth.duck';

interface Props {
  appName: string;
}

const App: FC<Props> = ({ appName }) => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(getIsAuthorized);

  const handleLogout = useCallback(() => {
    dispatch(signOut.request());
  }, [dispatch]);

  return (
    <ConnectedRouter history={history}>
      <AppBar title={appName} isAuthorized={isAuthorized} onLogout={handleLogout} />
      <Layout>
        <Switch>
          <Route path="/registration">
            <RegistrationForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <PrivateRoute path="/">
            <Profile />
          </PrivateRoute>
        </Switch>
      </Layout>
    </ConnectedRouter>
  );
};

export default App;
