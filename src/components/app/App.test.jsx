import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter, Route } from 'react-router-dom';
import mockVillagersData from '../../../fixtures/villagers.json';
import mockAppVillager from '../../../fixtures/app.json';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get(
    'https://acnhapi.com/v1/villagers/',
    (req, res, ctx) => {
      return res(
        ctx.json(mockVillagersData)
      )
    }),

  rest.get(
    'https://acnhapi.com/v1/villagers/1',
    (req, res, ctx) => {
      return res(
        ctx.json(mockAppVillager)
      )
    })
)

describe('App component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders App', async () => {
    render(
      <MemoryRouter>
        <Route>
          <App />
        </Route>
      </MemoryRouter>
    );

    const header = screen.getByText(`let's cross some animals!`);
    expect(header).toMatchSnapshot(); 

    //check for villager item for clickability
    const cyrano = await screen.findByText('Cyrano');
    userEvent.click(cyrano);
    const detailCyrano = await screen.findAllByRole('region', { name: 'villager detail' });
    expect(detailCyrano).toMatchSnapshot();
  });
});
