import { render } from '@testing-library/react';

import ProductDetailsNav from './ProductDetailsNav';

describe('ProductDetailsNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProductDetailsNav
        breadcrumbs={[
          { id: 1, name: 'Home', href: '/' },
          { id: 2, name: 'Products', href: 'products' },
          { id: 3, name: 'Products list', href: 'products/list' },
        ]}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
