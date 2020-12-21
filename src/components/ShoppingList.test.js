import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList';
import { v4 as uuidv4 } from 'uuid';

// jest.mock('../__mocks__/Item')

test('it renders more than items on the list', () => {
    render(<ShoppingList list={[
        {
          id: uuidv4(),
          title: 'milk',
          completed: false
        }, 
        {
          id: uuidv4(),
          title: 'eggs',
          completed: false
        }, 
        {
          id: uuidv4(),
          title: 'soya milk',
          completed: false
        }, 
      ]}/>)

    const item = screen.getByText("milk")
    const item2 = screen.getByText("soya milk")
    expect(item).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
})

test('it renders an item with a checkbox next to it', () => {
    render(<ShoppingList list={[
        {
          id: uuidv4(),
          title: 'yogurt',
          completed: false
        }, 
      ]}/>)

    const item = screen.getByText("yogurt")
    const checkbox = screen.getByRole('checkbox')
    expect(item).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
})

