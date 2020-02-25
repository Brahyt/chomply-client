import React from 'react';
import {shallow, mount} from 'enzyme';
import { render } from '@testing-library/react';

import FoodWindow from './FoodWindow';

FoodWindow.defaultProps = {data: {title: "test title"}}
describe('Food Window', () => {
  test('smoke test', () => {
    const wrapper = shallow(<FoodWindow />)
    expect(wrapper.exists()).toBe(true)
  })
  test('If no state, show loading', () => {
    const wrapper = shallow(<FoodWindow />)
    expect(wrapper.contains("Loading")).toBe(true)
  });
})
