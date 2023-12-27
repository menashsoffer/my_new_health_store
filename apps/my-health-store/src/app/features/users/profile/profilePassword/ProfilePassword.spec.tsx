import { render } from '@testing-library/react';

import ProfilePassword from './ProfilePassword';

describe('ProfilePassword', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfilePassword />);
    expect(baseElement).toBeTruthy();
  });
});
