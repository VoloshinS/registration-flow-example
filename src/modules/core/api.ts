import { find, omit, findIndex } from 'lodash';
import md5 from 'md5';

import { User } from './redux/types';

const getUsers = () => {
  const usersStringified = localStorage.getItem('users');

  return usersStringified ? JSON.parse(usersStringified) : [];
};

const setUsers = (users: User[]) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const createUser = (user: User) => {
  const users = getUsers();

  if (find(users, { username: user.username })) {
    throw new Error('Already exist');
  }

  setUsers([...users, { ...user, password: md5(user.password!) }]);

  return omit(user, ['password']);
};

export const loginUser = (user: User) => {
  const users = getUsers();
  const userInDb = find(users, { username: user.username });

  if (!userInDb) {
    throw new Error('User does not exist');
  }

  if (userInDb.password !== md5(user.password!)) {
    throw new Error('Wrong password');
  }

  return omit(userInDb, ['password']);
};

export const removeUser = (username: string) => {
  const users = getUsers();
  const userIndex = findIndex(users, { username });

  setUsers([...users.slice(0, userIndex), ...users.slice(userIndex + 1)]);

  return username;
};

export const changeUser = ({ username, description }: User) => {
  const users = getUsers();
  const userIndex = findIndex(users, { username });

  setUsers([
    ...users.slice(0, userIndex),
    {
      ...users[userIndex],
      username,
      description,
    },
    ...users.slice(userIndex + 1),
  ]);

  return username;
};
