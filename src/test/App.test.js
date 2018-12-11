import React from 'react';
import ReactDOM from 'react-dom';
import App from '../TicTacToe';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('includes 1 div with the className of App', () => {
    expect(wrapper.find('div.App').exists()).toBe(true)
  })
  it('includes 2 divs', () => {
    expect(wrapper.find('div.App h1').text()).toBe("Tic Tac Toe")
  })
  it('Component matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
