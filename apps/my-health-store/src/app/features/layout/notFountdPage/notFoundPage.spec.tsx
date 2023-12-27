import { render } from '@testing-library/react';

import NotFoundPage from './notFoundPage';

describe('NotFoundPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotFoundPage />);
    expect(baseElement).toBeTruthy();
  });
});
