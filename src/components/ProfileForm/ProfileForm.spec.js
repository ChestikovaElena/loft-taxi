import React from 'react';
import { ProfileForm } from './ProfileForm.js';
import { render } from '@testing-library/react';
import { BrowserRouter, Switch } from 'react-router-dom';

describe("ProfileForm", () => {
  it("renders when card is loadding", () => {
    const { getByTestId } = render(<ProfileForm isLoaddingCard/>);
    expect(getByTestId('header').textContent).toBe('Loading...');
  })
  it("renders when card is not loadding and card is updated", () => {
    const { container } = render(
      <BrowserRouter>
        <ProfileForm isLoaddingCard={false} isUpdatedCard/>
      </BrowserRouter>);
    expect(container.innerHTML).toMatch("Платёжные данные обновлены.");
  });
  it("renders when card is not loadding and card is not updated", () => {
    const { container } = render(
      <ProfileForm isLoaddingCard={false} isUpdatedCard={false}/>);
      expect(container.innerHTML).toMatch("Введите платежные данные");
  });
})