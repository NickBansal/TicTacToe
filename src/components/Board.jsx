import React from 'react';
import './Board.css'

const Board = ({ gameSquares, handleClick }) => {
    return (
        <div className="GameBoard">
            {gameSquares.map((element, index) => {
                return <div 
                key={index}
                onClick = {() => handleClick(index)}
                className="Box">{element}</div>
            })}
        </div>
    )
}


export default Board;