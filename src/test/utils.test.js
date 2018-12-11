import { calculateWinner, filterXs } from '../utils'

describe('Calculating a winning combination', () => {
    
    it('Right combination returns true', () => {
        const squares1 = ['X', 'X', 'X', null, null, null, null, null, null] 
        const squares2 = ['X', 'X', null, 'X', null, null, null, null, null] 
        const squares3 = [null, 'O', null, null, 'O', null, null, 'O', null] 
        expect(calculateWinner(squares1)).toBe('X')
        expect(calculateWinner(squares2)).toBe(false)
        expect(calculateWinner(squares3)).toBe('O')
    })

    it('Counts how many xs are in an array', () => {
        const array1 = ['X', null, null, 'X']
        const array2 = ['X', null, null, null]
        const array3 = ['X', 'X', 'X', 'X']
        const array4 = [null, null, null, null]
        expect(filterXs(array1)).toBe(2)
        expect(filterXs(array2)).toBe(1)
        expect(filterXs(array3)).toBe(4)
        expect(filterXs(array4)).toBe(0)
    })
})