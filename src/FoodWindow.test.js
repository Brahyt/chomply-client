import React from 'react';
import { render } from '@testing-library/react';
import FoodWindow from './FoodWindow';

test('renders learn react link', () => {
  const { getByText } = render(<FoodWindow />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
