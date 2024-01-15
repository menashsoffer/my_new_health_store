import styles from './AddProduct.module.css';
import { useEffect, useState } from 'react';
import { ProductCreate } from 'apps/library';
import SelectCategory from './selectCategory/SelectCategory';
import { useAtom } from 'jotai';
import { productForm } from '../../atom/productsStore';
import CreateButton from './CreateButton/CreateButton';

/* eslint-disable-next-line */
export interface AddProductProps {}

const AddProduct = (props: AddProductProps) => {
  const [atom, setAtom] = useAtom(productForm);

  const [form, setForm] = useState<ProductCreate>(atom);

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (form) setAtom(form);
  }, [form]);

  return (
    <div className={styles['container']}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a product
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="product_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="product_name"
                  name="product_name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="product_description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="product_description"
                  name="product_description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Write a short description about the product."
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="product_usage"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Usage
              </label>
              <div className="mt-2">
                <textarea
                  id="product_usage"
                  name="product_usage"
                  rows={2}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Write a short usage rules for the product"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="ingredients"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ingredients
              </label>
              <div className="mt-2">
                <textarea
                  id="ingredients"
                  name="ingredients"
                  rows={2}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="ingredients"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  id="price"
                  name="price"
                  type="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="price"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="image_src"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image src
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="image_src"
                  name="image_src"
                  type="url"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="image_alt"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image alt
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="image_alt"
                  name="image_alt"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <SelectCategory />
            <CreateButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
