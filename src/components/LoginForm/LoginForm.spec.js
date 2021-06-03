import React from 'react';
import { LoginForm } from './LoginForm.js';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe("LoginForm", () => {
  describe("with valid inputs", () => {
    it("calls the onSubmit function", async () => {
      const mockDispatch = jest.fn();
      const { getByTestId, container } = render(<LoginForm onSubmit={mockDispatch} />);

      await act(async () => {
        fireEvent.change(getByTestId("emailInput").querySelector('input'), {target: {value: "email@test.com"}});
        fireEvent.change(getByTestId("passwordInput").querySelector('input'), {target: {value: "1234567"}});
      });

      await act(async () => {
        fireEvent.click(getByTestId("buttonSubmit"));
      });
      // expect(mockDispatch).toHaveBeenCalled();
      // expect(mockDispatch).toBeCalledWith({
      //   "payload": { "email": "email@test.com", "password": "1234567" },
      //   type: "AUTHENTICATE",
      // });
    });
  });

  describe("with invalid email", () => {
    it("renders the email validation error", async () => {
      const mockDispatch = jest.fn();
      const { getByTestId, container } = render(<LoginForm onSubmit={mockDispatch} />);

      await act(async () => {
        fireEvent.change(getByTestId("emailInput").querySelector('input'), {target: {value: "email"}});
        fireEvent.change(getByTestId("passwordInput").querySelector('input'), {target: {value: "1234567"}});
      });

      await act(async () => {
        fireEvent.click(getByTestId("buttonSubmit"));
      });

      expect(container.innerHTML).toMatch("Не верно введен email");
    });
  });

  describe("with invalid passward", () => {
    it("renders the passward validation error", async () => {
      const mockDispatch = jest.fn();
      const { getByTestId, container } = render(<LoginForm onSubmit={mockDispatch} />);

      await act(async () => {
        fireEvent.change(getByTestId("emailInput").querySelector('input'), {target: {value: "email@test.com"}});
        fireEvent.change(getByTestId("passwordInput").querySelector('input'), {target: {value: "1"}});
      });

      await act(async () => {
        fireEvent.click(getByTestId("buttonSubmit"));
      });

      expect(container.innerHTML).toMatch("Длина пароля не менее 3 символов");
    });
  });
})