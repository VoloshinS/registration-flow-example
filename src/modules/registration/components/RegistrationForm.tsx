import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Form } from '../../core';
import { addUser } from '../../core/redux';
import { User } from '../../core/redux/types';

const RegistrationForm: FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (user: User) => {
      dispatch(addUser(user));
    },
    [dispatch]
  );

  return <Form title="Registration" buttonLabel="Register" onSubmit={handleSubmit} />;
};

export default RegistrationForm;
