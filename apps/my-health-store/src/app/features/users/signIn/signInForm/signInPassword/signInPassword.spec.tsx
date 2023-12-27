import { render } from '@testing-library/react';

import SignInPassword from './signInPassword';

describe('SignInPassword', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInPassword />);
    expect(baseElement).toBeTruthy();
  });
});
