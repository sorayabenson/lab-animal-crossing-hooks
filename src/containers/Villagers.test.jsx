import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Villagers from './Villagers';
import mockVillagerData from '../../fixtures/villagers.json';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter, Route } from 'react-router-dom';

const server = setupServer(
    rest.get(
        'https://acnhapi.com/v1/villagers/',
        (req, res, ctx) => {
            return res(
                ctx.json(mockVillagerData)
            )
        })
)

describe('Villager container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());


    it('renders Villagers', () => {
        render(
            <MemoryRouter>
                <Route>
                    <Villagers />   
                </Route>
            </MemoryRouter>
        );
        
        screen.getByText(`Looks like someone's on their way here!`)

        return waitFor(() => {
            const ul = screen.getByRole('list', { name: 'villagers' })
            expect(ul).toMatchSnapshot();
            const li = screen.getAllByRole('listitem', { name: 'villager' })
            screen.getAllByRole('link');
            screen.getAllByRole('img');
            screen.getAllByRole('heading');
            screen.getAllByRole('catchphrase', { name: 'villager catchphrase'})
            expect(li).toMatchSnapshot();
        })
    })
})