import { render } from '@testing-library/react';

import SignInPhone from './signInPhone';

describe('SignInPhone', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInPhone />);
    expect(baseElement).toBeTruthy();
  });
});
