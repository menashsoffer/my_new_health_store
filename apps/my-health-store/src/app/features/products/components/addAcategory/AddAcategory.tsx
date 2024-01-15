import { useState } from 'react';
import styles from './AddAcategory.module.css';
import { useNavigate } from 'react-router-dom';
import { trpc } from '../../../../../trpc/index';

const AddAcategory = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    image_src: '',
    description: '',
  });

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const click = () => {
    const { name, image_src, description } = form;
    try {
      console.log(form);
      trpc.addCategory
        .mutate({
          name,
          image_src,
          description,
        })
        .then(() => navigate('/'));
    } catch (error) {
      console.log(error);
    }
  };

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
            Create a category
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  Category image src
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="image_src"
                  name="image_src"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  onChange={changeHandler}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a short description about the category.
              </p>
            </div>
            {form.name !== '' &&
            form.image_src !== '' &&
            form.description !== '' ? (
              <div>
                <div
                  onClick={() => click()}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create it
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAcategory;
