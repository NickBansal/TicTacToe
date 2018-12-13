export const aiMoves = squares => {
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
    
    // EVERYTHING ELSE 

    else if (squares[2] === squares[4] && squares[2] !== null && squares[0] === null) squares[0] = 'O'
    else if (squares[0] === squares[4] && squares[0] !== null && squares[2] === null) squares[2] = 'O'
    else if (squares[8] === squares[4] && squares[8] !== null && squares[6] === null) squares[6] = 'O'
    else if (squares[6] === squares[4] && squares[6] !== null && squares[8] === null) squares[8] = 'O'

    else if (squares[0] === squares[7] && squares[0] !== null && squares[6] === null) squares[6] = 'O'
    else if (squares[2] === squares[7] && squares[2] !== null && squares[8] === null) squares[8] = 'O'
    else if (squares[1] === squares[8] && squares[8] !== null && squares[2] === null) squares[2] = 'O'
    else if (squares[3] === squares[2] && squares[3] !== null && squares[0] === null) squares[0] = 'O'
    else if (squares[0] === squares[5] && squares[0] !== null && squares[2] === null) squares[2] = 'O'
    else if (squares[3] === squares[8] && squares[3] !== null && squares[6] === null) squares[6] = 'O'

    else if (squares[0] === squares[8] && squares[0] !== null && squares[4] !== null && squares[5] === null) squares[5] = 'O'
    else if (squares[0] === squares[8] && squares[0] !== null && squares[4] !== null && squares[7] === null) squares[7] = 'O'
    else if (squares[2] === squares[6] && squares[2] !== null && squares[4] !== null && squares[3] === null) squares[3] = 'O'
    else if (squares[2] === squares[6] && squares[2] !== null && squares[4] !== null && squares[7] === null) squares[7] = 'O'
    else if (squares.filter(item => item === null).length === 2 && squares[7] === null) squares[7] = 'O' 
    return squares
}