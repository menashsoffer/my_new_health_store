import { render } from '@testing-library/react';

import ProfilePostalCode from './ProfilePostalCode';

describe('ProfilePostalCode', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfilePostalCode />);
    expect(baseElement).toBeTruthy();
  });
});
