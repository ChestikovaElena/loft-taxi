import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../store';
import { MapPage } from './MapPage.js';
import { BrowserRouter, Switch } from 'react-router-dom';

describe('MapPage', () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Switch>
          <Provider store={store}>
            <MapPage />
          </Provider>
        </Switch>
      </BrowserRouter>
    );
    expect(container.innerHTML).toMatch("map-wrapper");
  });
});