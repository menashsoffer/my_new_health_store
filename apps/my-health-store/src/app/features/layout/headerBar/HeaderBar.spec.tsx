import { render } from '@testing-library/react';

import HeaderBar from './HeaderBar';

describe('HeaderBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderBar />);
    expect(baseElement).toBeTruthy();
  });
});
