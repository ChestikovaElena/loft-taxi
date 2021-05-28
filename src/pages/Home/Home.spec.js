import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../store';
import { Home } from './Home.js';

describe('Home', () => {
  it("renders correctly", () => {
    const { container } = render(
      <Provider store={store}><Home /></Provider>
    );
    expect(container.innerHTML).toMatch("home-page__logo");
  });
});