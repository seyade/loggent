import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('p').text()).toEqual('© Loggent 2017. All rights reserved.');
  });
});
