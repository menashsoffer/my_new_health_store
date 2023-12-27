import { render } from '@testing-library/react';

import SignInPostalCode from './SignInPostalCode';

describe('SignInPostalCode', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInPostalCode />);
    expect(baseElement).toBeTruthy();
  });
});
