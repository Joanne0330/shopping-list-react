import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';




test('renders the header', () => {
  render(<Header />)
  const header = screen.getByText(/My Shopping List/i);
  expect(header).toBeInTheDocument();
});