import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { Header } from './Header';

jest.mock("../../pages/Home", () => ({ Home: () => <div>Home content</div> }));
jest.mock("../../pages/MapPage", () => ({ Map: () => <div>Map content</div> }));
jest.mock("../../pages/Profile", () => ({ Profile: () => <div>Profile content</div> }));

describe('Header', () => {
  it('renders correctly', () => {
      const { queryByTestId } = render(
          <BrowserRouter>
              <Header />
          </BrowserRouter>
      );
      expect(queryByTestId('header')).toBeTruthy();
      expect(queryByTestId('menu')).toHaveClass('header__menu');
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const mockStore = {
        getState: () => ({}), // auth: { token: 'token' } 
        subscribe: () => {},
        dispatch: () => {},
      };
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <Router history={history}>
          <Provider store={mockStore}>
            <Header />
          </Provider>
        </Router>
      );

      expect(container.innerHTML).toMatch("header");
      fireEvent.click(getByText("Карта"));
      // expect(container.innerHTML).toMatch("Map content");
      // fireEvent.click(getByText("Профиль"));
      // expect(container.innerHTML).toMatch("Profile content");
    });
  });
});