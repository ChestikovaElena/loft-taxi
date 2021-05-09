import React from 'react';
import { render } from '@testing-library/react';
import { HeaderWithAuth } from './Header';

describe('Header', () => {
    it('renders correctly', () => {
        const { queryByTestId } = render(<HeaderWithAuth />);

        expect(queryByTestId('header')).toBeTruthy();
        expect(queryByTestId('menu')).toHaveClass('header__menu');
    });
});