import { render } from '@testing-library/react';

import SignInName from './signInName';

describe('SignInName', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInName />);
    expect(baseElement).toBeTruthy();
  });
});
