import { render } from '@testing-library/react';

import ProfileName from './ProfileName';

describe('ProfileName', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileName />);
    expect(baseElement).toBeTruthy();
  });
});
