import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import RolesList from './RolesList';

describe('RolesList', () => {
  it('renders without crashing', () => {
    let wrapper = shallow(<RolesList />);
    expect(wrapper.length).toEqual(1);
  });
});
