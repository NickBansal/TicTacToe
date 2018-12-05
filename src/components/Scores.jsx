import React from 'react'
import './Scores.css'

const Scores = ({ player1, player1Score, player2Score, resetScore }) => {

    const style = {
        transform: 'scale(1.4)',
        transition: '1s' 
    }

    return (
        <div>
            <div className="FullBox">
                <div style={player1 ? style : null} className="PlayerScore">
                    <h2>Player 1</h2>
                    <h2>{ player2Score }</h2>
                </div>
                <div style={!player1 ? style : null} className="PlayerScore">
                    <h2>Player 2</h2>
                    <h2>{ player1Score }</h2>
                </div>
            </div>
             <button
             onClick={resetScore} 
             className="ResetScore">RESET SCORES</button>
        </div>
        
    )
}

export default Scores