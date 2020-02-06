import { find } from 'lodash';
import { User } from './redux/types';

export const createUser = (user: User) => {
  const usersInDb = localStorage.getItem('users');
  const users: User[] = usersInDb ? JSON.parse(usersInDb) : [];

  if (find(users, { username: user.username })) {
    throw new Error('Already exist');
  }

  localStorage.setItem('users', JSON.stringify([...users, user]));

  return user;
};
