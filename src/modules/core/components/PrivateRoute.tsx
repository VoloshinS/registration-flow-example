import React, { FC, ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  children: ReactNode;
  path: string;
}

const PrivateRoute: FC<Props> = ({ children, ...rest }) => {
  const isAuthorized = false; //useSelector(state => state);
  const render = useCallback(
    ({ location }) =>
      isAuthorized ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ),
    [children, isAuthorized]
  );
  return <Route {...rest} render={render} />;
};

export default PrivateRoute;
