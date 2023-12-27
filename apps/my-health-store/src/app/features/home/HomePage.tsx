import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles['container']}>
      <div className="flex flex-col items-center px-4 py-8">
        <header className="flex items-center justify-between w-full mb-8 bg-red-500"></header>

        <main>
          <section className="text-center max-w-lg mb-8 ">
            <h2 className="text-3xl font-bold mb-4">Welcome Message</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
              quae!
            </p>
          </section>

          <section className="flex flex-wrap justify-center">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </main>
      </div>
    </div>
  );
}

export default HomePage;

function Card() {
  return (
    <div className="p-4 max-w-sm rounded shadow-lg">
      <h3 className="font-bold mb-2">Card Title</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
}
