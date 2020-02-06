import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import * as Yup from 'yup';

import { Form } from '../../core';
import { addUser, getError } from '../../core/redux';
import { User } from '../../core/redux/types';

export const RegistrationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/\S/, 'Password can only contain non whitespace character.'),
});

const RegistrationForm: FC = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const handleSubmit = useCallback(
    (user: User) => {
      dispatch(addUser(user));
    },
    [dispatch]
  );

  return (
    <Form
      icon={<PersonAddIcon />}
      title="Registration"
      buttonLabel="Register"
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
      error={error}
    />
  );
};

export default RegistrationForm;
