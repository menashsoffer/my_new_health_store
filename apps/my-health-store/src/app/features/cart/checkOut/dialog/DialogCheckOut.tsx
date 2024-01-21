import styles from './DialogCheckOut.module.css';
import ContactDetails from './contactDetails/ContactDetails';
import CartItems from './cartItems/CartItems';
import Form from './form/Form';

const DialogCheckOut = () => {
  return (
    <div className={styles['container']}>
      <div className="relative mx-auto w-full bg-white">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-indigo-700 sm:text-3xl">
                Checkout
                <span className="mt-2 block h-1 w-10 bg-indigo-600 sm:w-20"></span>
              </h1>
              <Form />
              <p className="mt-10 text-center text-sm font-semibold text-indigo-500">
                By placing this order you agree to the{' '}
                <button
                  // onClick={() => {}}
                  className="whitespace-nowrap text-indigo-400 underline hover:text-indigo-600"
                >
                  Terms and Conditions
                </button>
              </p>
              <button
                onClick={() => {}}
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-indigo-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-indigo-500 sm:text-lg"
              >
                Place Order
              </button>
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-indigo-800 to-indigo-400 opacity-95"></div>
            </div>
            <CartItems />
            <ContactDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogCheckOut;
