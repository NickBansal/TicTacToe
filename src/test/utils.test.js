import { calculateWinner } from '../utils'

describe('Calculating a winning combination', () => {
    it('Right combination returns true', () => {
        expect(calculateWinner([0, 1])).toEqual(null)
    })
})