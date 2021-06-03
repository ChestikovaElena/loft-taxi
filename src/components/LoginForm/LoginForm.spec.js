import React from 'react';
import { LoginForm } from './LoginForm.js';
import { render } from '@testing-library/react';

describe("LoginForm", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<LoginForm />)

  })
})