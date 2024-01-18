import { render } from '@testing-library/react';

import CreateButton from './CreateButton';

describe('CreateButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateButton />);
    expect(baseElement).toBeTruthy();
  });
});
