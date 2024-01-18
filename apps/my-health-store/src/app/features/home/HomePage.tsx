import { useAtom } from 'jotai';
import styles from './HomePage.module.css';
import { userAtom } from '../users/atom/userStore';
import MyMap from './map/Map';

export function HomePage() {
  const [user] = useAtom(userAtom);
  return (
    <div className={styles['container']}>
      <div className="flex flex-col items-center px-4 py-8">
        <header className="flex items-center justify-between w-full mb-8 bg-red-500"></header>

        <main>
          <section className="text-center mb-28 ">
            <h2 className="text-3xl font-bold mb-4">
              Welcome {user.firstname}
            </h2>
            <p className="text-gray-700">
              "Welcome to our health and wellness shop! We're thrilled you're
              here and hope you find exactly what you need for your health
              journey."
            </p>
          </section>
          <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 justify-center">
            <div className="lazy">
              <img
                src="https://cdn.foreverliving.com/content/cards/images/home_aloeveragel_banner_1120x350_1669899485419.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="col-start-3 sepia"></div>
            <div className="saturate-200">
              <img
                src="https://cdn.foreverliving.com/content/cards/images/home_aloeveragel_banner_1120x350_1669899485419.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="grayscale">
              <img
                src="https://cdn.foreverliving.com/content/cards/images/home_aloeveragel_banner_1120x350_1669899485419.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="row-start-1 col-start-2 col-span-2 invert">
              <img
                src="https://cdn.foreverliving.com/content/cards/images/home_aloeveragel_banner_1120x350_1669899485419.jpg"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="row-start-1 col-start-2 col-span-2 invert">
            <MyMap />
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
