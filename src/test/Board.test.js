import './setupTest';
import React from 'react';
import Board from '../components/Board';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe.only('<Board />', () => {

    const minProps = {
        gameSquares: Array(9).fill(null), 
        handleClick: () => {}
    }

    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Board {...minProps}/>)
    })
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
      })
    it('Checks that the div component with className GameBoard exists', () => {
        expect(wrapper.find('div.GameBoard').exists()).toBe(true)
    })
    it('Counts the amount of squares on the gameboard', () => {
        expect(wrapper.find('div.Box').length).toBe(9)
    })
})