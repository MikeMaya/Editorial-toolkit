import React from 'react';
import { shallow } from 'enzyme';
import DashBoardPage from '../../components/DashBoardPage';

test('Render DashBoardPage', () => {
    const wrapper = shallow(<DashBoardPage />);
    expect(wrapper).toMatchSnapshot();
});