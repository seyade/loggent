import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Footer from './Card';

describe('Footer', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper.find('.buttons--save .fa-info').text()).toEqual('View more');
  });
});
