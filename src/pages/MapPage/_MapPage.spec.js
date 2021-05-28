import React from 'react';
import { render } from '@testing-library/react';

import { MapPage } from './MapPage.js';

describe('MapPage', () => {
  it("renders correctly", () => {
    const { container } = render(
      <MapPage />
    );
    expect(container.innerHTML).toMatch("map-wrapper");
  });
});