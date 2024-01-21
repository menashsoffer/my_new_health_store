import styles from './ContactDetails.module.css';

export function ContactDetails() {
  return (
    <div className={styles['container']}>
      <div className="relative mt-10 text-white">
        <h3 className="mb-5 text-lg font-bold">Support</h3>
        <p className="text-sm font-semibold">
          055 235 211 <span className="font-light">(pone number)</span>
        </p>
        <p className="mt-1 text-sm font-semibold">
          support@nanohair.com{' '}
          <span className="font-light">(Email address)</span>
        </p>
        <p className="mt-2 text-xs font-medium">
          Call us now for order related issues
        </p>
      </div>
    </div>
  );
}

export default ContactDetails;
