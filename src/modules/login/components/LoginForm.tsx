import React, { FC, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Form } from '../../core';
import { signInUser, getError } from '../../core/redux';
import { User } from '../../core/redux/types';

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const handleSubmit = useCallback(
    (user: User) => {
      dispatch(signInUser(user));
    },
    [dispatch]
  );

  return <Form title="Sign In" buttonLabel="Login" onSubmit={handleSubmit} error={error} />;
};

export default LoginForm;
