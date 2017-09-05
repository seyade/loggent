import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import RolesPage from './RolesPage';

describe('RolesPage', () => {
  it('renders without crashing', () => {
    let wrapper = shallow(<RolesPage />);
    expect(wrapper.length).toEqual(1);
  });
});
