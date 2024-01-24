import styles from './Avatar.module.css';
import { Fragment, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { userAtom } from '../../users/atom/userStore';

export function Avatar() {
  const navigate = useNavigate();
  const user = useAtomValue(userAtom);
  const categories = [
    { id: 1, name: 'Create category', navigate: 'addCategory' },
    {
      id: 2,
      name: 'Create product',
      navigate: 'addProduct',
    },
  ];

  return (
    <div className={styles['container']}>
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => navigate(`/profile`)}
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                    'w-full',
                  )}
                >
                  Your Profile
                </button>
              )}
            </Menu.Item>
            {categories.map(
              (category, i) =>
                user.isadmin && (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <button
                        onClick={() => navigate(`${category.navigate}`)}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                          'w-full',
                        )}
                      >
                        {category.name}
                      </button>
                    )}
                  </Menu.Item>
                ),
            )}
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => {
                    localStorage.removeItem('token');
                  }}
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                    'w-full',
                    'text-center',
                  )}
                >
                  Sign out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Avatar;
