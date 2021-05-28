import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header', () => {
    it('renders correctly', () => {
        const { queryByTestId } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(queryByTestId('header')).toBeTruthy();
        expect(queryByTestId('menu')).toHaveClass('header__menu');
    });
});