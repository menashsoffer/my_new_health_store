import { useNavigate } from 'react-router-dom';
import styles from './ProductDetailsNav.module.css';

/* eslint-disable-next-line */
export interface ProductDetailsNavProps {
  breadcrumbs: {
    id: number;
    name: string;
    href: string;
  }[];
}

export function ProductDetailsNav(props: ProductDetailsNavProps) {
  const navigate = useNavigate();
  return (
    <div className={styles['container']}>
      <nav aria-label="Breadcrumb">
        <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {props.breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <button
                  onClick={() => navigate(breadcrumb.href)}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {breadcrumb.name}
                </button>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default ProductDetailsNav;
