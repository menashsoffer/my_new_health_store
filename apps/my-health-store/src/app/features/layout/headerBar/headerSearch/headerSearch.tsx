import styles from './headerSearch.module.css';

/* eslint-disable-next-line */
export interface HeaderSearchProps {}

export function HeaderSearch(props: HeaderSearchProps) {
  return (
    <div className={styles['container']}>
        <div className="flex w-full mr-15 rounded bg-white">
          <input className=" w-full border-none outline-none  " type="search" name="search" placeholder="Search..." />
          <button type="submit" className="m-2 rounded px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          </button>
        </div>
      </div>
  );
}

export default HeaderSearch;
