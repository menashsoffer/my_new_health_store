import classNames from 'classnames';
import styles from './HeaderBarMenu.module.css';
import { useNavigate } from 'react-router-dom';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

/* eslint-disable-next-line */

const navigation = [
  { name: 'About', href: 'home' },
  { name: 'Products', href: 'products' },
  { name: 'Contact', href: '/' },
];

interface HeaderBarMenuProps {}

export function HeaderBarMenu(props: HeaderBarMenuProps) {
  const navigate = useNavigate();
  return (
    <div className={styles['container']}>
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <div
              key={item.name}
              onClick={() => navigate(item.href)}
              className={classNames(
                'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderBarMenu;
