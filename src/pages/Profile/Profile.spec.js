import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';

import store from '../../store';
import { Profile } from './Profile';

describe("Profile", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Provider store={store}><Profile /></Provider>
    );
    expect(container.innerHTML).toMatch("background")
  });
});
