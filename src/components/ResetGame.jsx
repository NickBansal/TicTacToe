import React from 'react';
import './ResetGame.css'

const ResetGame = ({ resetGame }) => {
    return (
        <div>
            <button onClick={resetGame}>RESET</button>
        </div>
    )
}

export default ResetGame