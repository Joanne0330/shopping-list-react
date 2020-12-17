import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./__mocks__/Header')


test('renders the header', () => {
  render(<App />)
  const header = screen.getByText(/My Shopping List/i);
  expect(header).toBeInTheDocument();
});
