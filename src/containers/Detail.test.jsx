import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Detail from './Detail';
import { MemoryRouter, Route } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';


const kiki = {
    "birthday": "October 8th",
    "catchphrase": "kitty cat",
    "hobby": "Education",
    "icon": "https://acnhapi.com/v1/icons/villagers/46",
    "id": 46,
    "image": "https://acnhapi.com/v1/images/villagers/46",
    "name": "Kiki",
    "personality": "Normal",
    "species": "Cat",
}

const ogKiki = {
        "id": 46,
        "file-name": "cat04",
        "name": {
            "name-USen": "Kiki",
            "name-EUen": "Kiki",
            "name-EUde": "Kiki",
            "name-EUes": "Ágata",
            "name-USes": "Ágata",
            "name-EUfr": "Kiki",
            "name-USfr": "Kiki",
            "name-EUit": "Kiki",
            "name-EUnl": "Kiki",
            "name-CNzh": "余子酱",
            "name-TWzh": "余子醬",
            "name-JPja": "キャビア",
            "name-KRko": "캐비어",
            "name-EUru": "Кики"
        },
        "personality": "Normal",
        "birthday-string": "October 8th",
        "birthday": "8/10",
        "species": "Cat",
        "gender": "Female",
        "subtype": "B",
        "hobby": "Education",
        "catch-phrase": "kitty cat",
        "icon_uri": "https://acnhapi.com/v1/icons/villagers/46",
        "image_uri": "https://acnhapi.com/v1/images/villagers/46",
        "bubble-color": "#515151",
        "text-color": "#fffce9",
        "saying": "Nothing ventured, nothing gained.",
        "catch-translations": {
            "catch-USen": "kitty cat",
            "catch-EUen": "kitty cat",
            "catch-EUde": "miausi",
            "catch-EUes": "galletita",
            "catch-USes": "michifiú",
            "catch-EUfr": "chti minou",
            "catch-USfr": "chti minou",
            "catch-EUit": "mieaoo",
            "catch-EUnl": "poesjemauw",
            "catch-CNzh": "酱酱",
            "catch-TWzh": "醬醬",
            "catch-JPja": "だニ",
            "catch-KRko": "뭐라지요",
            "catch-EUru": "кисуля"
        }
}

const server = setupServer(
    rest.get(
        'https://acnhapi.com/v1/villagers/46',
        (req, res, ctx) => {
            return res(
                ctx.json(ogKiki)
            )
        })
)

describe('Detail Component', () => {
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