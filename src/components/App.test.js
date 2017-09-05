import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders fine', () => {
    const wrapper = mount(<App />);
    expect(wrapper.length).toEqual(1);
  });
});
