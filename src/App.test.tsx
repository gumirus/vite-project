import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WrappedApp, App } from './App';

import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World!');
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exit']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
