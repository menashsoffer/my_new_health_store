import { render } from '@testing-library/react';

import ProfileEmail from './ProfileEmail';

describe('ProfileEmail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileEmail />);
    expect(baseElement).toBeTruthy();
  });
});
