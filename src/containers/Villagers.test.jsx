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


    it('renders Villagers', async () => {
        render(
            <MemoryRouter>
                <Route>
                    <Villagers />   
                </Route>
            </MemoryRouter>
        );
        
        screen.getByText(`Looks like someone's on their way here!`)

        await waitFor(async () => {
            const ul = await screen.findAllByRole('list', { name: 'villagers' })
            expect(ul).toMatchSnapshot();
            const li = await screen.findAllByRole('listitem', { name: 'villager' })
            screen.findAllByRole('link');
            screen.findAllByRole('img');
            screen.findByRole('heading');
            screen.findByRole({ name: 'villager catchphrase'})
            expect(li).toMatchSnapshot();
        })
    })
})