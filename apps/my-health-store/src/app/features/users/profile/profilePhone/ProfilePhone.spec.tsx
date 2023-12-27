import { render } from '@testing-library/react';

import ProfilePhone from './ProfilePhone';

describe('ProfilePhone', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfilePhone />);
    expect(baseElement).toBeTruthy();
  });
});
