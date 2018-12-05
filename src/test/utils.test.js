import { calculateWinner } from '../utils'

describe('Calculating a winning combination', () => {
    
    it('Right combination returns true', () => {
        const squares1 = ['X', 'X', 'X', null, null, null, null, null, null] 
        const squares2 = ['X', 'X', null, 'X', null, null, null, null, null] 
        const squares3 = [null, 'O', null, null, 'O', null, null, 'O', null] 
        expect(calculateWinner(squares1)).toBe('X')
        expect(calculateWinner(squares2)).toBe(null)
        expect(calculateWinner(squares3)).toBe('O')
    })
})