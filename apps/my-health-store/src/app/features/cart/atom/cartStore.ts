import { CartType, ProductRead } from '../../../../../../library/index';
import { atom } from 'jotai';

export const openCartAtom = atom<boolean>(false);
export const cartNotFoundAtom = atom<boolean>(false);
export const checkOut = atom<boolean>(false);

export const cartAtom = atom<CartType[]>([]);
