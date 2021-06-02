import React from 'react';
import { OrderForm } from './OrderForm.js';
import { render } from '@testing-library/react';
import { BrowserRouter, Switch } from 'react-router-dom';

describe("OrderForm", () => {
  it("renders when profile is complete and route is loaded", () => {
    const { getByTestId } = render(<OrderForm isProfileComplete isLoadedRoute/>);
    expect(getByTestId('header').textContent).toBe('Заказ размещен');
  })
  it("renders when profile is complete and route is loadding", () => {
    const { getByTestId } = render(<OrderForm isProfileComplete isLoadedRoute={false} isLoaddingRoute/>);
    expect(getByTestId('header').textContent).toBe('Маршрут загружается');
  })
  it("renders when profile is complete and route is not loaded", () => {
    const { getByTestId } = render(<OrderForm isProfileComplete isLoadedRoute={false} isLoaddingRoute={false}/>);
    expect(getByTestId('fromAddress').textContent).toBe('Откуда');
  })
  it("renders when profile is not complete", () => {
    const { getByTestId } = render(
      <BrowserRouter><Switch><OrderForm isProfileComplete={false}/></Switch></BrowserRouter>);
    expect(getByTestId('header').textContent).toBe('Введите данные карты.');
  })
})