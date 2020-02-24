import React from 'react';
import { render } from '@testing-library/react';
import FoodWindow from './FoodWindow';

const defaultProps = {data: {title: "test title"}}
test('renders learn react link', () => {
  const { getByText } = render(
    <FoodWindow 
      data={{data: {title: "test title"}}}
    />
);
  const linkElement = getByText(/test title/i);
  expect(linkElement).toBeInTheDocument();
});
