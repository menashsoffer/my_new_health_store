import { render } from '@testing-library/react';

import ProductDetailsNav from './ProductDetailsNav';

describe('ProductDetailsNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProductDetailsNav
        breadcrumbs={[
          { id: 1, name: 'דף הבית', href: '/' },
          { id: 2, name: 'קטגוריות', href: 'products' },
          { id: 3, name: 'מוצרים', href: 'products/list' },
        ]}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
