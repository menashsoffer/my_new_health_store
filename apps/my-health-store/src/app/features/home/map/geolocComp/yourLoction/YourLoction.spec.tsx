import { render } from '@testing-library/react';

import YourLoction from './YourLoction';

describe('YourLoction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<YourLoction />);
    expect(baseElement).toBeTruthy();
  });
});
