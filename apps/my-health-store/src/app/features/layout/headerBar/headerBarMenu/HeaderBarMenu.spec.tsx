import { render } from '@testing-library/react';

import HeaderBarMenu from './HeaderBarMenu';

describe('HeaderBarMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderBarMenu />);
    expect(baseElement).toBeTruthy();
  });
});
