import { atom } from 'jotai';

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  city: string;
  street: string;
  postalcode: string;
  phonenumber: number;
}

// const removeUser = (users: User[], id: number): User[] =>
//   users.filter((user) => user.id !== id);

export const newUserAtom = atom<User>({
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  city: '',
  street: '',
  postalcode: '',
  phonenumber: 0,
});

export const getUsers = atom<User[]>([]);
// export const addUser = atom(
//   () => {},
//   (get, set) => {
//     set(getUsers, addUser(get(getUsers), get(newUserAtom)));
//     set(newUserAtom, defaultUser);
//   },
// );
// export const updateUser = atom(
//   () => {},
//   (get, set) => {
//     set(getUsers, addUser(get(getUsers), get(newUserAtom)));
//     set(newUserAtom, defaultUser);
//   },
// );
