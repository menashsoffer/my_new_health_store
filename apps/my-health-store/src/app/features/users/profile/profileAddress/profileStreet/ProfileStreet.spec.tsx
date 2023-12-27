import { render } from '@testing-library/react';

import ProfileStreet from './ProfileStreet';

describe('ProfileStreet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileStreet />);
    expect(baseElement).toBeTruthy();
  });
});
