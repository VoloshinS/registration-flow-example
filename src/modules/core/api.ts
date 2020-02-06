import { find, findIndex } from 'lodash';
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

  setUsers([...users, user]);

  return user;
};

export const loginUser = (user: User) => {
  const users = getUsers();
  const userInDb = find(users, { username: user.username });

  if (!userInDb) {
    throw new Error('User does not exist');
  }

  if (userInDb.password !== user.password) {
    throw new Error('Wrong password');
  }

  return userInDb;
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
