import { aiMoves } from './aiMoves'

export const filterXs = squares => {
    return squares.filter(item => item === 'X').length
}

export const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return false;
}

export const easyComputerTurn = squares => {
    let randNum = Math.floor(Math.random() * 9)
    if (squares[randNum] === null) {
        squares[randNum] = 'O'
        return squares
    }
    return easyComputerTurn(squares)
}

export const hardComputerTurn = squares => {
    const firstChoice = [0, 2, 6, 8]
    if (squares.filter(item => item === null).length > 6) {
        if (squares[4] === null) {
            squares[4] = 'O'
            return squares
        } else {
            let randNum = Math.floor(Math.random() * 4)
            squares[firstChoice[randNum]] = 'O'
            return squares
        }
    } else {
        return aiMoves(squares)
    }
}