import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('h1').text()).toEqual('LOGGENT');
  });
});
