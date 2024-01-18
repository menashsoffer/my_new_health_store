export interface User {
  id: string;
  firstname: string;
  lastname: string;
  isadmin: boolean;
  email: string;
  password: string;
  city: string;
  street: string;
  postalcode: number;
  phonenumber: number;
}

export interface InputUser {
  firstname: string;
  lastname: string;
  isadmin: boolean;
  email: string;
  password: string;
  city: string;
  street: string;
  postalcode: number;
  phonenumber: number;
}
