import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Detail from './Detail';
import { MemoryRouter, Route } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import mockDetailData from '../../fixtures/detail.json';

const server = setupServer(
    rest.get(
        'https://acnhapi.com/v1/villagers/46',
        (req, res, ctx) => {
            return res(
                ctx.json(mockDetailData)
            )
        })
)

describe('Detail container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    
    it('renders Detail', async () => {
        render(
            <MemoryRouter initialEntries={['/46']}>
                <Route path='/:id'>
                    <Detail />
                </Route>
            </MemoryRouter>
        );

        screen.getByText('circling for landing');
        
        await waitFor(() => {
            const image = screen.getAllByAltText('Kiki');
            expect(image).toMatchSnapshot();            
            const name = screen.getByText('Kiki');
            expect(name).toMatchSnapshot();
            const catchphrase = screen.getByText('kitty cat');
            expect(catchphrase).toMatchSnapshot(); 
        })
    })
})