import React from 'react';
import {shallow} from 'enzyme';
import { render } from '@testing-library/react';
import FoodWindow from './FoodWindow';

const defaultProps = {data: {title: "test title"}}
test('Test component with loading', () => {
  const wrapper = shallow(<FoodWindow />)
  console.log(wrapper.debug())
  expect(wrapper)
});
