import React from 'react';
import './setupTest'
import App from '../TicTacToe';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe.only('<App />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  it('Component matches the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Testing components within the className of App', () => {
    expect(wrapper.find('div.App').exists()).toBe(true)
    expect(wrapper.find('div.App h1').text()).toBe("Tic Tac Toe")
  })
  it('Reset button resets the game', () => {
    const newInstance = wrapper.instance()
    newInstance.resetGame()
    expect(wrapper.state().squares).toEqual([null, null, null, null, null, null, null, null, null])
  })
  it('The handleClick function returns a X value to the square', () => {
    const newInstance = wrapper.instance()
    newInstance.handleClick(1)
    expect(wrapper.state().squares.filter(item => item === 'X').length).toBe(1)
    newInstance.handleClick(2)
    expect(wrapper.state().squares.filter(item => item === 'X').length).toBe(2)
  })
  it('handleDifficulty method changes the difficulty of the game', () => {
    const newInstance = wrapper.instance()
    newInstance.handleDifficulty('Easy')
    expect(wrapper.state().difficulty).toBe('Easy')
    newInstance.handleDifficulty('Hard')
    expect(wrapper.state().difficulty).toBe('Hard')
  })
  it('CheckTheGameWinner method checks if there is a winner and resets the game', () => {
    expect(wrapper.state().resetGame).toBe(false)
    const winner = ['X', 'X', 'X', null]
    const newInstance = wrapper.instance()
    newInstance.checkTheGameWinner(winner)
    expect(wrapper.state().resetGame).toBe(true)
    expect(wrapper.find('h1.Winner').exists()).toBe(true)
    expect(wrapper.find('div#ResetModal').length).toBe(1)
  })
  it('CheckTheGameWinner method will not reset game if there is no winner', () => {
    const winner = ['X', 'X', null, 'X']
    const newInstance = wrapper.instance()
    newInstance.checkTheGameWinner(winner)
    expect(wrapper.state().resetGame).toBe(false)
  })
})
