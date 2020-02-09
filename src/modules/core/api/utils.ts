import { omit } from 'lodash/fp';

export const omitPassword = omit(['password']);

export const getUsers = () => {
  const usersStringified = localStorage.getItem('users');

  return usersStringified ? JSON.parse(usersStringified) : [];
};

export const setUsers = <T>(users: T[]) => {
  localStorage.setItem('users', JSON.stringify(users));
};
