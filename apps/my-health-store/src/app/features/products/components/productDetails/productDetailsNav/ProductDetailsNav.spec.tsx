import { render } from '@testing-library/react';

import ProductDetailsNav from './ProductDetailsNav';

describe('ProductDetailsNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductDetailsNav />);
    expect(baseElement).toBeTruthy();
  });
});
