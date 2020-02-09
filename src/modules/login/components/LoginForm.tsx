import React, { FC, useCallback } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from '../../core';
import { signIn, getAuthError } from '../../core/redux/auth.duck';
import { User } from '../../core/interfaces';

export const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string().required('No password provided.'),
});

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const authError = useSelector(getAuthError);

  const handleSubmit = useCallback(
    (user: User) => {
      dispatch(signIn.request(user));
    },
    [dispatch]
  );

  return (
    <Form
      title="Sign In"
      buttonLabel="Login"
      onSubmit={handleSubmit}
      error={authError}
      validationSchema={SignUpSchema}
    />
  );
};

export default LoginForm;
