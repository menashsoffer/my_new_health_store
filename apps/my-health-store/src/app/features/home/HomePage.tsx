import { useAtom } from 'jotai';
import styles from './HomePage.module.css';
import { userAtom } from '../users/atom/userStore';
import Routing from './map/Map';

export function HomePage() {
  const [user] = useAtom(userAtom);
  return (
    <div className={styles['container']}>
      <div className="flex flex-col items-center px-4 py-8">
        <header className="flex items-center justify-between w-full mb-8 bg-red-500"></header>

        <main>
          <section className="text-center mb-10 ">
            <h2 className="text-5xl font-bold mb-8">
              {user.firstname} ברוכים הבאים
            </h2>
            <p className="text-gray-700 font-semibold text-2xl ">
              !ברוכים הבאים לחנות הבריאות שלנו
            </p>
            <p className="text-gray-700 font-semibold text-2xl ">
              אנו שמחים שאתה כאן ומקווים שתמצא בדיוק את מה שאתה צריך למסע
              הבריאות שלך
            </p>
          </section>
          {/* <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 justify-center">
            <div className="lazy">
              <img
                src="https://cdn.foreverliving.com/content/cards/images/home_aloeveragel_banner_1120x350_1669899485419.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="col-start-3 sepia">
              <img
                src="https://cdn.foreverliving.com/content/cards/images/home_aloeveragel_banner_1120x350_1669899485419.jpg"
                alt=""
                loading="lazy"
              />
            </div>
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
          </div> */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-5">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src="https://docs.material-tailwind.com/img/team-3.jpg"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src="https://docs.material-tailwind.com/img/team-3.jpg"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                  alt="gallery-photo"
                />
              </div>
            </div>
          </div>
          <div className="row-start-1 col-start-2 col-span-2 ">
            <Routing />
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
