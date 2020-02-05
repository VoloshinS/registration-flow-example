import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout /*, Link */ } from './modules/core';
// import { ModuleNameRoot } from './modules/moduleName';

import styles from './App.module.scss';

interface Props {
  appName: string;
}

const App: FC<Props> = ({ appName }) => {
  return (
    <Router>
      <Layout title={appName}>
        <Switch>
          {/* <Route path="/moduleName">
            <ModuleNameRoot />
          </Route> */}
          <Route path="/">
            <h1 className={styles.heading}>Home page</h1>
            {/* <Link to="/moduleName">Module Name</Link> */}
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
