import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('renders every section linked from the nav', () => {
  render(<App />);
  for (const id of ['about', 'skills', 'experience', 'projects', 'interests', 'contact']) {
    expect(document.querySelector(`#${id}`)).toBeInTheDocument();
  }
  expect(screen.getByText('Engineering Manager')).toBeInTheDocument();
});
