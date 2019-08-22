import React from 'react';
import ReactSimplePagination from '../index';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(
    <ReactSimplePagination page={1} maxPage={5} onClickAction={number => {}} />
  );
  expect(wrapper).toExist();
});
