import { render } from '@testing-library/react';

import SignInStreet from './SignInStreet';

describe('SignInStreet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInStreet />);
    expect(baseElement).toBeTruthy();
  });
});
