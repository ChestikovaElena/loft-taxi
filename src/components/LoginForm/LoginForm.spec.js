import React from 'react';
import { LoginFormWithAuth } from './LoginForm.js';
import { render } from '@testing-library/react';

describe("LoginForm", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<LoginFormWithAuth />)

    expect(getByTestId('emailInput')).toHaveClass('form__input')
    expect(getByTestId('passwordInput')).toHaveClass('form__input')
    expect(getByTestId('submitButton')).toHaveClass('form__button')
  })
})