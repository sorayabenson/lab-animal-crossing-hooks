import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Detail from './Detail';

describe('Detail Component', () => {
    it('renders Detail', () => {
        render(
            <Detail 
                match={{
                    params: {
                        id: 46
                    },
                }}/>
        );

        
    })
})