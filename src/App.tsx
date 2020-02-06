import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { Layout, PrivateRoute } from './modules/core';
import { RegistrationForm } from './modules/registration';
import { LoginForm } from './modules/login';
import { Profile } from './modules/profile';
import { history } from './store';

interface Props {
  appName: string;
}

const App: FC<Props> = ({ appName }) => {
  return (
    <ConnectedRouter history={history}>
      <Layout title={appName}>
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
