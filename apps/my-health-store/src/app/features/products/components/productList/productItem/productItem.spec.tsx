import { render } from '@testing-library/react';

import ProductItem from './productItem';

describe('ProductItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductItem />);
    expect(baseElement).toBeTruthy();
  });
});
