import { render } from '@testing-library/react';

import HeaderSearch from './headerSearch';

describe('HeaderSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderSearch />);
    expect(baseElement).toBeTruthy();
  });
});
