import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// jest.mock('./__mocks__/Header')
// jest.mock('./__mocks__/AddItem')


test('renders the header', () => {
  render(<App />)
  const header = screen.getByText(/My Shopping List/i);
  expect(header).toBeInTheDocument();
});

test('it can add an item to the list', () => {
  render(<App />)
  const textBox = screen.getByPlaceholderText("Add Item ...")
  userEvent.type(textBox, "yogurt")
  userEvent.click(screen.getByTestId('submit'))
  const item = screen.getByText("yogurt")
  expect(item).toBeInTheDocument();
})

test('user can check off a list', () => {
  render(<App />)
  const textBox = screen.getByPlaceholderText("Add Item ...")
  userEvent.type(textBox, "oranges")
  userEvent.click(screen.getByTestId('submit'))

  const checkbox = screen.getByRole("checkbox")
  userEvent.click(checkbox)
  expect(checkbox).toBeChecked();
})

test('user can delete an item', () => {
  render(<App />)
  const textBox = screen.getByPlaceholderText("Add Item ...")
  userEvent.type(textBox, "coffee")
  userEvent.click(screen.getByTestId('submit'))
  const newItem = screen.getByText("coffee")
  expect(newItem).toBeInTheDocument();
  userEvent.dblClick(screen.getByTestId('delete'))
  expect(newItem).not.toBeInTheDocument();
})