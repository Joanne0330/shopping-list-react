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
    expect(title).toBeInTheDocument();
})