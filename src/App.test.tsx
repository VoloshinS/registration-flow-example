import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders apps', () => {
  const { getByText } = render(<App appName="Test App"/>);
  const appName = getByText(/Test App/i);

  expect(appName).toBeInTheDocument();
});
