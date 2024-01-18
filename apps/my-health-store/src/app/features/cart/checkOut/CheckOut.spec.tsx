import { render } from '@testing-library/react';

import CheckOut from './CheckOut';

describe('CheckOut', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckOut />);
    expect(baseElement).toBeTruthy();
  });
});
