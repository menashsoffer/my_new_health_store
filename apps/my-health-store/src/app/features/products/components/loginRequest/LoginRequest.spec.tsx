import { render } from '@testing-library/react';

import LoginRequest from './LoginRequest';

describe('LoginRequest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginRequest />);
    expect(baseElement).toBeTruthy();
  });
});
