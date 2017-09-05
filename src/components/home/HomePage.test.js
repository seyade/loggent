import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('.loggent-home__title').text()).toBe('Manage your job applications');
  });
});
