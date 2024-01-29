import classNames from 'classnames';
import styles from './HeaderBarMenu.module.css';
import { useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: 'home' },
  { name: 'Products', href: 'products' },
  // { name: 'Contact', href: '/' },
];

const HeaderBarMenu = () => {
  const navigate = useNavigate();
  return (
    <div className={styles['container']}>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.href)}
              className={classNames(
                'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderBarMenu;
