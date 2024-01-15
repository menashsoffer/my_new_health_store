export type CategoryCreate = {
  name: string;
  description: string;
  image_src: string;
};

export type CategoryRead = {
  id?: string;
  name: string;
  description: string;
  image_src: string;
  createdAt?: string;
  updatedAt?: string;
};
