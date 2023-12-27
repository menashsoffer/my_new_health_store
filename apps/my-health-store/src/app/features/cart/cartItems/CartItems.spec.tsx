import { render } from '@testing-library/react';

import CartItems from './CartItems';

describe('CartItems', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartItems />);
    expect(baseElement).toBeTruthy();
  });
});
