import React from 'react';
import { render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import Item from './Item';


test('it has a single item and a checkbox', () => {
    render(<Item item={{
        id: uuidv4(),
        title: 'milk',
        completed: false
    }}/>)
    const title = screen.getByText(/milk/i)
    const checkbox = screen.getByRole('checkbox')
    expect(title).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
})

test('it has a fake item and a checkbox', () => {
    render(<Item item={{
        id: uuidv4(),
        title: 'apple',
        completed: false
    }}/>)
    const title = screen.getByText(/apple/i)
    const checkbox = screen.getByRole('checkbox')
    expect(title).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
})