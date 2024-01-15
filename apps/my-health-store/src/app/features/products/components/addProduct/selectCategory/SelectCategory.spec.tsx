import { render } from '@testing-library/react';

import SelectCategory from './SelectCategory';

describe('SelectCategory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectCategory />);
    expect(baseElement).toBeTruthy();
  });
});
