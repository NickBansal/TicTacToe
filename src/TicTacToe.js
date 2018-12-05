import React, { Component } from 'react';
import Board from './components/Board'
import './App.css';
import { calculateWinner } from './utils'
import Reset from './components/ResetGame'
import Scores from './components/Scores'

class App extends Component {

  state = {
    squares: Array(9).fill(null),
    player1: true,
    resetGame: false,
    player1Score: 0,
    player2Score: 0
  }

  render() {

    const winner = calculateWinner(this.state.squares),
    playerWinner = !this.state.player1 ? 'Player 1' : 'Player 2',
    newText = winner ? `'${playerWinner}' is the winner!` : `Draw`,
    style = this.state.resetGame ? { filter: 'grayscale(100%) opacity(0.2)', transition: '1s' } : null
    
    return (
      <div className="App">
        <div style={style}>
          <h1>Tic Tac Toe</h1>
          <Board 
          handleClick={this.handleClick}
          gameSquares={this.state.squares}/>
          <Scores 
          resetScore={this.resetScore}
          player1Score={this.state.player1Score}
          player2Score={this.state.player2Score}
          player1={this.state.player1}/>
        </div>

        {this.state.resetGame && 
        <div id="ResetModal">
          <h1 className="Winner">{ newText }</h1>
          <Reset resetGame={this.resetGame}/>
        </div>
        }
      </div>
    );
  }

  handleClick = (index) => {
    let player1 = this.state.player1
    let text = this.state.player1 ? 'X' : 'O'
    const squares = this.state.squares.map((box, i) => {
      if (i === index && box === null && !calculateWinner(this.state.squares)) {
        box = text
        player1 = !player1
      }
      return box 
    })
    this.checkTheGameWinner(player1, squares)
    this.setState({
      squares, 
      player1
    })
  }

  checkTheGameWinner = (player1, squares) => {
    let Score1, Score2
    Score1 = player1 ? 1 : 0
    Score2 = !player1 ? 1 : 0
    if (calculateWinner(squares)) {
      this.setState({
        resetGame: true,
        player1Score: this.state.player1Score + Score1,
        player2Score: this.state.player2Score + Score2
      })
    }
  }

  resetGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      resetGame: false
    })
  }

  resetScore = () => {
    this.setState({
      player1Score: 0,
      player2Score: 0
    })
  }

}

export default App;
