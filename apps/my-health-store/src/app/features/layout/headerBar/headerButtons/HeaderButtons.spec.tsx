import { render } from '@testing-library/react';

import HeaderButtons from './HeaderButtons';

describe('HeaderButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderButtons />);
    expect(baseElement).toBeTruthy();
  });
});
