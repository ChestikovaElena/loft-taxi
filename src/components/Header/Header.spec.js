import React from 'react';
import { render } from '@testing-library/react';
import { HeaderWithConnect } from './Header';

describe('Header', () => {
    it('renders correctly', () => {
        const { queryByTestId } = render(<HeaderWithConnect />);

        expect(queryByTestId('header')).toBeTruthy();
        expect(queryByTestId('menu')).toHaveClass('header__menu');
    });
});