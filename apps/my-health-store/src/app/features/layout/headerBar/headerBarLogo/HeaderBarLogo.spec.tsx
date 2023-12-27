import { render } from '@testing-library/react';

import HeaderBarLogo from './HeaderBarLogo';

describe('HeaderBarLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderBarLogo />);
    expect(baseElement).toBeTruthy();
  });
});
