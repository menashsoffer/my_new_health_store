import { render } from '@testing-library/react';

import ProfileAddress from './ProfileAddress';

describe('ProfileAddress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileAddress />);
    expect(baseElement).toBeTruthy();
  });
});
