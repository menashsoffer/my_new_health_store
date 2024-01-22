import { render } from '@testing-library/react';

import GeolocComp from './GeolocComp';

describe('GeolocComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GeolocComp />);
    expect(baseElement).toBeTruthy();
  });
});
