import React from 'react';
import { render, screen } from '@testing-library/react';
import AddItem from './AddItem';


test('it renders the text box', () => {
    render(<AddItem />)
    const textBox = screen.getByPlaceholderText("Add Item ...")
    expect(textBox).toBeInTheDocument();
})
