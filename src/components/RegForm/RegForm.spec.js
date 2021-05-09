import React from 'react';
import { RegForm } from './RegForm.js';
import { render } from '@testing-library/react';

describe("RegForm", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<RegForm />)

    expect(getByTestId('emailInput')).toHaveClass('form__input')
    expect(getByTestId('nameInput')).toHaveClass('form__input')
    expect(getByTestId('passwordInput')).toHaveClass('form__input')
    expect(getByTestId('regButton')).toHaveClass('form__button')
    expect(getByTestId('loginButton')).toHaveClass('form__reg-button')
  })
})