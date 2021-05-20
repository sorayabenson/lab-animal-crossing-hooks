import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders App', () => {
    render(<App />);

    const header = screen.getByText(`let's cross some animals!`)
    expect(header).toMatchSnapshot(); 

    //check for link clickability
  });
});
