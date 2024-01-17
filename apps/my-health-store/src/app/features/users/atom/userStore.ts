import { atom } from 'jotai';
import { InputUser, User } from './interface/userTypes';

export const userAtom = atom<User>({
  id: '',
  firstname: '',
  lastname: '',
  isadmin: false,
  email: '',
  password: '',
  city: '',
  street: '',
  postalcode: 0,
  phonenumber: 0,
});

export const updateUserAtom = atom<InputUser>({
  firstname: '',
  lastname: '',
  isadmin: false,
  email: '',
  password: '',
  city: '',
  street: '',
  postalcode: 0,
  phonenumber: 0,
});

export const createUserAtom = atom<InputUser>({
  firstname: '',
  lastname: '',
  isadmin: false,
  email: '',
  password: '',
  city: '',
  street: '',
  postalcode: 0,
  phonenumber: 0,
});

export const getUsers = atom<User[]>([]);

export const token = atom<String>('');
