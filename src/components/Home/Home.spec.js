import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Home.js';

describe('Home', () => {
  it("renders correctly", () => {
    const { container } = render(<Home />);
    expect(container.innerHTML).toMatch("home-page__logo");
  });
});