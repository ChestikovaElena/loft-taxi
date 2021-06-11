import React from 'react';
import { RegForm } from './RegForm.js';
import { render } from '@testing-library/react';

describe("RegForm", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<RegForm />)

    expect(getByTestId('header').textContent).toBe('Регистрация');
    expect(getByTestId('emailInput')).toHaveClass('form__input')
    expect(getByTestId('nameInput')).toHaveClass('form__input')
    expect(getByTestId('passwordInput')).toHaveClass('form__input')
    expect(getByTestId('regButton').textContent).toBe('Зарегистрироваться')
    expect(getByTestId('goToLoginForm').textContent).toBe('Войти')
  })
})