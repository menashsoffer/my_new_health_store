import { render } from '@testing-library/react';

import EmailLogin from './EmailLogin';

describe('EmailLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmailLogin />);
    expect(baseElement).toBeTruthy();
  });
});
