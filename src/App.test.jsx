import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('renders the main sections', () => {
  render(<App />);
  expect(document.querySelector('#about')).toBeInTheDocument();
  expect(document.querySelector('#projects')).toBeInTheDocument();
  expect(screen.getAllByText(/contact/i).length).toBeGreaterThan(0);
});
