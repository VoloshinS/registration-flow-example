import React, { FC, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { Form } from '../../core';
import { signInUser } from '../../core/redux';
import { User } from '../../core/redux/types';

const LoginForm: FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (user: User) => {
      dispatch(signInUser(user));
    },
    [dispatch]
  );

  return <Form title="Sign In" buttonLabel="Login" onSubmit={handleSubmit} />;
}

export default LoginForm;
