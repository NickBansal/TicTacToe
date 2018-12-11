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
        // TOP ROW
        if (squares[0] === squares[1] && squares[0] !== null && squares[2] === null) squares[2] = "O" 
        else if (squares[1] === squares[2] && squares[1] !== null && squares[0] === null) squares[0] = 'O'
        else if (squares[0] === squares[2] && squares[0] !== null && squares[1] === null) squares[1] = 'O'

        // MIDDLE ROW
        else if (squares[3] === squares[4] && squares[3] !== null && squares[5] === null) squares[5] = 'O'
        else if (squares[4] === squares[5] && squares[4] !== null && squares[3] === null) squares[3] = 'O' 
        else if (squares[3] === squares[5] && squares[3] !== null && squares[4] === null) squares[4] = 'O' 

        // BOTTOM ROW
        else if (squares[6] === squares[7] && squares[6] !== null && squares[8] === null) squares[8] = 'O'
        else if (squares[7] === squares[8] && squares[7] !== null && squares[6] === null) squares[6] = 'O'
        else if (squares[6] === squares[8] && squares[6] !== null && squares[7] === null) squares[7] = 'O'

        // LEFT COLUMN
        else if (squares[0] === squares[3] && squares[0] !== null && squares[6] === null) squares[6] = 'O'
        else if (squares[3] === squares[6] && squares[3] !== null && squares[0] === null) squares[0] = 'O'
        else if (squares[0] === squares[6] && squares[0] !== null && squares[3] === null) squares[3] = 'O'

        // MIDDLE COLUMN
        else if (squares[1] === squares[4] && squares[1] !== null && squares[7] === null) squares[7] = 'O' 
        else if (squares[4] === squares[7] && squares[4] !== null && squares[1] === null) squares[1] = 'O'
        else if (squares[1] === squares[7] && squares[1] !== null && squares[4] === null) squares[4] = 'O'

        // RIGHT COLUMN
        else if (squares[2] === squares[5] && squares[2] !== null && squares[8] === null) squares[8] = 'O' 
        else if (squares[5] === squares[8] && squares[5] !== null && squares[2] === null) squares[2] = 'O'
        else if (squares[2] === squares[8] && squares[2] !== null && squares[5] === null) squares[5] = 'O'

        // LEFT DIAGONAL
        else if (squares[0] === squares[4] && squares[0] !== null && squares[8] === null) squares[8] = 'O'
        else if (squares[2] === squares[8] && squares[4] !== null && squares[0] === null) squares[0] = 'O'
        else if (squares[0] === squares[8] && squares[0] !== null && squares[4] === null) squares[4] = 'O'

        // RIGHT DIAGONAL
        else if (squares[2] === squares[4] && squares[2] !== null && squares[6] === null) squares[6] = 'O'
        else if (squares[4] === squares[6] && squares[4] !== null && squares[2] === null) squares[2] = 'O'
        else if (squares[2] === squares[6] && squares[6] !== null && squares[4] === null) squares[4] = 'O'

        else if (squares[0] === squares[7] && squares[0] !== null && squares[6] === null) squares[6] = 'O'
        else if (squares[2] === squares[7] && squares[2] !== null && squares[8] === null) squares[8] = 'O'
        else if (squares[1] === squares[8] && squares[8] !== null && squares[2] === null) squares[2] = 'O'
        else if (squares[3] === squares[2] && squares[3] !== null && squares[0] === null) squares[0] = 'O'
        else if (squares[0] === squares[5] && squares[0] !== null && squares[2] === null) squares[2] = 'O'
        else if (squares[3] === squares[8] && squares[3] !== null && squares[6] === null) squares[6] = 'O'

        // EVERYTHING ELSE 
        else if (squares[0] === squares[8] && squares[0] !== null && squares[4] !== null && squares[5] === null) squares[5] = 'O'
        else if (squares[0] === squares[8] && squares[0] !== null && squares[4] !== null && squares[7] === null) squares[7] = 'O'
        else if (squares[2] === squares[6] && squares[2] !== null && squares[4] !== null && squares[3] === null) squares[3] = 'O'
        else if (squares[2] === squares[6] && squares[2] !== null && squares[4] !== null && squares[7] === null) squares[7] = 'O'
        else if (squares.filter(item => item === null).length === 2 && squares[7] === null) squares[7] = 'O' 
        return squares
    }
}