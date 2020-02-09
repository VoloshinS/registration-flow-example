import React, { FC, ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getIsAuthorized } from '../redux/auth.duck';

interface Props {
  children: ReactNode;
  path: string;
}

const PrivateRoute: FC<Props> = ({ children, ...rest }) => {
  const isAuthorized = useSelector(getIsAuthorized);
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
