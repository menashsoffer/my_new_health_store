import { useNavigate } from 'react-router-dom';
import { ProductCreate } from '../../../../../../../../library/index';
import styles from './CreateButton.module.css';
import { useAtomValue } from 'jotai';
import { productForm } from '../../../../../stores/productsStore';
import { trpc } from '../../../../../../trpc/index';

const CreateButton = () => {
  const product = useAtomValue(productForm);

  const navigate = useNavigate();

  const click = () => {
    const {
      product_name,
      product_description,
      product_usage,
      ingredients,
      image_src,
      categoryId,
      image_alt,
    }: ProductCreate = product;
    const price = Number(product.price);
    try {
      trpc.addProduct
        .mutate({
          product_name,
          product_description,
          product_usage,
          ingredients,
          price,
          image_src,
          categoryId,
          image_alt,
        })
        .then(() => navigate('/'))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles['container']}>
      <div>
        <div
          onClick={() => click()}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create it
        </div>
      </div>
    </div>
  );
};

export default CreateButton;
