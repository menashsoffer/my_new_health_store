import { render } from '@testing-library/react';

import LineComp from './LineComp';

describe('LineComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LineComp />);
    expect(baseElement).toBeTruthy();
  });
});
