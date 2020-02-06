import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from '../../core';
import { addUser, getError } from '../../core/redux';
import { User } from '../../core/redux/types';

const RegistrationForm: FC = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const handleSubmit = useCallback(
    (user: User) => {
      dispatch(addUser(user));
    },
    [dispatch]
  );

  return <Form title="Registration" buttonLabel="Register" onSubmit={handleSubmit} error={error} />;
};

export default RegistrationForm;
