import { render } from '@testing-library/react';

import CartNotFound from './CartNotFound';

describe('CartNotFound', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartNotFound />);
    expect(baseElement).toBeTruthy();
  });
});
