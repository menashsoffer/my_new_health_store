import styles from './HeaderBar.module.css';

/* eslint-disable-next-line */
// export interface HeaderBarProps {}

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import HeaderBarLogo from './headerBarLogo/HeaderBarLogo';
import HeaderBarMenu from './headerBarMenu/HeaderBarMenu';
import HeaderButtons from './headerButtons/HeaderButtons';

export function HeaderBar() {
  return (
    <div className={styles['container']}>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <HeaderBarLogo />
                <HeaderBarMenu />
              </div>
              <HeaderButtons />
            </div>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default HeaderBar;
