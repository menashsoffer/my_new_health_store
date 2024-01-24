import { render } from '@testing-library/react';

import DialogPanel from './dialogPanel';

describe('DialogPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DialogPanel />);
    expect(baseElement).toBeTruthy();
  });
});
