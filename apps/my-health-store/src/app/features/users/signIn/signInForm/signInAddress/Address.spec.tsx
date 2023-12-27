import { render } from '@testing-library/react';

import Address from './Address';

describe('Address', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Address />);
    expect(baseElement).toBeTruthy();
  });
});
