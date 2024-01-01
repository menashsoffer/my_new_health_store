import { atom } from 'jotai';

export interface User {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  address: {
    city: string;
    street: string;
    postalCode: string;
  };
  phone: number;
}

// const removeUser = (users: User[], id: number): User[] =>
//   users.filter((user) => user.id !== id);

// const addUser = (users: User[], user: User) => [
//   ...users,
//   {
//     id: Math.max(0, Math.max(...users.map(({ id }) => id))) + 1,
//     name: {
//       firstName: user.name.firstName,
//       lastName: user.name.lastName,
//     },
//     email: user.email,
//     password: user.password,
//     address: {
//       city: user.address.city,
//       street: user.address.street,
//       postalCode: user.address.postalCode,
//     },
//     phone: user.phone,
//   },
// ];

const defaultUser = {
  id: '',
  name: {
    firstName: '',
    lastName: '',
  },
  email: '',
  password: '',
  address: {
    city: '',
    street: '',
    postalCode: '',
  },
  phone: 0,
};

export const newUserAtom = atom<User>(defaultUser);

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
