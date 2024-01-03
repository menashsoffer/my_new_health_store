import { render } from '@testing-library/react';

import Redirect from './Redirect';

describe('Redirect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Redirect />);
    expect(baseElement).toBeTruthy();
  });
});
