import { find } from 'lodash';
import { User } from './redux/types';

export const saveUser = (user: User) => {
  const users: User[] = JSON.parse(localStorage.getItem('users') || '') || [];

  if (find(users, { username: user.username })) {
    throw new Error('Already exist');
  }

  localStorage.setItem('users', JSON.stringify([...users, user]));

  return user;
}
