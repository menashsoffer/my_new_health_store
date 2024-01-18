import { render } from '@testing-library/react';

import DialogCheckOut from './DialogCheckOut';

describe('DialogCheckOut', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DialogCheckOut />);
    expect(baseElement).toBeTruthy();
  });
});
