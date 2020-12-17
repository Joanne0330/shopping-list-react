import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList';
import { v4 as uuidv4 } from 'uuid';

jest.mock('../__mocks__/Item')

test('it renders an item on the list', () => {
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
          title: 'bananas',
          completed: false
        }, 
      ]}/>)

    const item = screen.getByText("milk")
    expect(item).toBeInTheDocument();
})