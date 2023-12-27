import { render } from '@testing-library/react';

import ProfileCity from './ProfileCity';

describe('ProfileCity', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileCity />);
    expect(baseElement).toBeTruthy();
  });
});
