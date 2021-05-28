import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ProfileWarning } from './ProfileWarning.js';
import { render } from '@testing-library/react';

describe("ProfileWarning", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ProfileWarning />
      </BrowserRouter>
    );
    expect(getByTestId('header').textContent).toBe('Профиль');
    expect(getByTestId('submitButton').textContent).toBe('Перейти на карту');
  })
})