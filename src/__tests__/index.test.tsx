import React from 'react';
import ReactSimplePagination from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

test('renders without crashing', () => {
  const wrapper = shallow(
    <ReactSimplePagination page={1} maxPage={5} onClickAction={number => {}} />
  );
  expect(wrapper).toExist();
});

test('renders without crashing', () => {
  const elem = shallowToJson(shallow(
    <ReactSimplePagination page={9} maxPage={10} onClickAction={number => {}} />
  ));
  expect(elem.children[0].children.length).toBe(6);
});
