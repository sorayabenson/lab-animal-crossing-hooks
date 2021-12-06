import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Villagers from './Villagers';

describe('Villager component', () => {
    it('renders Villagers', () => {
        render(<Villagers />);
        
    })
})