import { render } from '@testing-library/react';

import SignInCity from './SignInCity';

describe('SignInCity', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInCity />);
    expect(baseElement).toBeTruthy();
  });
});
