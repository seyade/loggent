import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<App />);
    expect(wrapper.length).toEqual(1);
  });
});
