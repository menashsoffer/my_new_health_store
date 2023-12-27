import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface CategoryProps {
  callout: {
    id: number;
    name: string;
    description: string;
    imageSrc: string;
  };
  i: number;
}

export function Category(props: CategoryProps) {
  const navigate = useNavigate();
  console.log(props.i);

  return (
    <div
      key={props.i}
      className="group relative"
      onClick={() => navigate('list')}
    >
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <img
          src={props.callout.imageSrc}
          alt={props.callout.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <span className="absolute inset-0" />
        {props.callout.name}
      </h3>
      <p className="text-base font-semibold text-gray-900">
        {props.callout.description}
      </p>
    </div>
  );
}

export default Category;
