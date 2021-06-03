import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import store from '../../store';
import { Home } from './Home.js';
import RegFormWithConnect from '../../components/RegForm';

describe('Home', () => {
  it("renders correctly when mode=login (default value))", () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(container.innerHTML).toMatch("Войти");
  });

  it("renders correctly when mode=registration", () => {
    configure({ adapter: new Adapter() });
    const HomeComponent = shallow(<Home />);
    HomeComponent.setState({ mode: 'registration' });
    expect(HomeComponent.contains(<RegFormWithConnect />)).toEqual(false);
  });
});