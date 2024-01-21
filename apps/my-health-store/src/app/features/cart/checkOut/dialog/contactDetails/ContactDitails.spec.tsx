import { render } from '@testing-library/react';

import ContactDitails from './ContactDetails';

describe('ContactDitails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactDitails />);
    expect(baseElement).toBeTruthy();
  });
});
