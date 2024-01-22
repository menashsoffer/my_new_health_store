import { useNavigate } from 'react-router-dom';
import { CategoryRead } from '../../../../../../../library/index';

/* eslint-disable-next-line */
export interface CategoryProps {
  callout: CategoryRead;
}

const Category = (props: CategoryProps, key: number) => {
  const navigate = useNavigate();
  return (
    <div
      className="group relative rounded-lg"
      onClick={() => navigate(`/products/category/${props.callout.id}`)}
    >
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <img
          key={key}
          src={props.callout.image_src}
          alt={props.callout.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <span className="absolute inset-0" key={key} />
        {props.callout.name}
      </h3>
      <p className="text-base font-semibold text-gray-900" key={key}>
        {props.callout.description}
      </p>
    </div>
  );
};

export default Category;
