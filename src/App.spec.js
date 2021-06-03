import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import store from './store';
import AppComponent from "./App.js";

jest.mock("./components/LoginForm", () => ({ LoginFormWithConnect: () => <div>Home content</div> }));
jest.mock("./components/Map", () => ({ Map: () => <div>Map content</div> }));
jest.mock("./pages/Home", () => ({ Home: () => <div>Home content</div> }));
jest.mock("./pages/Profile", () => ({ Profile: () => <div>Profile content</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <AppComponent />
        </Provider>
      </BrowserRouter>
    );
    expect(container.innerHTML).toMatch("Map content");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      // const { getByText, container } = render(<AppComponent token />);
      // fireEvent.click(getByText('Карта'));
      // expect(container.innerHTML).toMatch("Map content");
      // fireEvent.click(getByText('Профиль'));
      // expect(container.innerHTML).toMatch("Profile content");
    });
  });
});