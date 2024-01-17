import { render } from '@testing-library/react';

import PasswordLogin from './PasswordLogin';

describe('PasswordLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PasswordLogin />);
    expect(baseElement).toBeTruthy();
  });
});
