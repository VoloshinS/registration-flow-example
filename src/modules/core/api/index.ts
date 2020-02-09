import { find, findIndex } from 'lodash';
import { omit } from 'lodash/fp';
import md5 from 'md5';

import { User } from '../interfaces';

import { omitPassword, getUsers, setUsers } from './utils';

export const createUser = (user: User) => {
  const users = getUsers();

  if (find(users, { username: user.username })) {
    throw new Error('Already exist');
  }

  const newUser = { ...user, password: md5(user.password!) };

  setUsers<User>([...users, newUser]);

  return omitPassword(newUser);
};

export const changeUser = ({ username, description }: Partial<User>) => {
  const users = getUsers();
  const userIndex = findIndex(users, { username });
  const updatedUser = {
    ...users[userIndex],
    username,
    description,
  };

  setUsers<User>([
    ...users.slice(0, userIndex),
    {
      ...users[userIndex],
      username,
      description,
    },
    ...users.slice(userIndex + 1),
  ]);

  return omit(updatedUser, ['password']);
};

export const removeUser = (username: string) => {
  const users = getUsers();
  const userIndex = findIndex(users, { username });

  setUsers<User>([...users.slice(0, userIndex), ...users.slice(userIndex + 1)]);

  return username;
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

  return omitPassword(userInDb);
};
