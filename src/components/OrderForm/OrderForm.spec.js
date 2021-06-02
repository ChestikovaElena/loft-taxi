import React from 'react';
import { OrderForm } from './OrderForm.js';
import { render } from '@testing-library/react';

describe("OrderForm", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<OrderForm isProfileComplete isLoaddingRoute/>);
    expect(getByTestId('header').textContent).toBe('Заказ размещен');
    // expect(getByTestId('passwordInput')).toHaveClass('form__input')
    // expect(getByTestId('submitButton')).toHaveClass('form__button')
  })
})