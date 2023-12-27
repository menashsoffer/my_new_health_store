import { render } from '@testing-library/react';

import SignInEmail from './signInEmail';

describe('SignInEmail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInEmail />);
    expect(baseElement).toBeTruthy();
  });
});
