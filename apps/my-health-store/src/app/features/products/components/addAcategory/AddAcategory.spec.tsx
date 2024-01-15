import { render } from '@testing-library/react';

import AddAcategory from './AddAcategory';

describe('AddAcategory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddAcategory />);
    expect(baseElement).toBeTruthy();
  });
});
