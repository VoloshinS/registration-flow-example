import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout, PrivateRoute } from './modules/core';
import { RegistrationForm } from './modules/registration';
import { LoginForm } from './modules/login';
import { Profile } from './modules/profile';

interface Props {
  appName: string;
}

const App: FC<Props> = ({ appName }) => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
