import React, { FC, useCallback } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from '../../core';
import { signInUser, getError } from '../../core/redux';
import { User } from '../../core/redux/types';

export const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string().required('No password provided.'),
});

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const handleSubmit = useCallback(
    (user: User) => {
      dispatch(signInUser(user));
    },
    [dispatch]
  );

  return (
    <Form
      title="Sign In"
      buttonLabel="Login"
      onSubmit={handleSubmit}
      error={error}
      validationSchema={SignUpSchema}
    />
  );
};

export default LoginForm;
