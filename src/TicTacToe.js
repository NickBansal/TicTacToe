import React, { Component } from 'react';
import Board from './components/Board'
import './App.css';
import { calculateWinner, easyComputerTurn, hardComputerTurn, filterXs } from './utils'

class App extends Component {

  state = {
    squares: Array(9).fill(null),
    resetGame: false,
    difficulty: 'Easy' 
  }

  render() {

    const winner = calculateWinner(this.state.squares),
    playerWinner = winner === 'X' ? 'You are' : 'Computer is',
    newText = winner ? `${playerWinner} the winner!` : `Draw`,
    style = this.state.resetGame ? { filter: 'grayscale(100%) opacity(0.2)', transition: '1s' } : null
    
    return (
      <div className="App">
        <div style={style}>
          <h1>Tic Tac Toe</h1>
          <h3 style={{ margin: '20px' }}>Difficulty: {this.state.difficulty}</h3>
          <Board 
          handleClick={this.handleClick}
          gameSquares={this.state.squares}/>
          <button onClick={(e) => this.handleDifficulty(e.target.value)} value='Easy'>EASY</button>
          <button onClick={(e) => this.handleDifficulty(e.target.value)} value='Hard'>HARD</button>
        </div>
        {this.state.resetGame && 
        <div id="ResetModal">
          <h1 className="Winner">{ newText }</h1>
          <button onClick={() => this.resetGame()}>RESET</button>
        </div>
        }
      </div>
    );
  }

  handleClick = (index) => {
    const { difficulty } = this.state
    let squares = this.state.squares.map((box, i) => {
      if (i === index && box === null && !calculateWinner(this.state.squares)) {
        box = 'X'
      }
      return box 
    })
    if (squares.some(item => item === null) && (filterXs(this.state.squares) !== filterXs(squares))) {
      squares = difficulty === 'Easy' ? easyComputerTurn(squares) : hardComputerTurn(squares)
    }
    this.checkTheGameWinner(squares)
    this.setState({
      squares
    })
  }

  checkTheGameWinner = (squares) => {
    if (calculateWinner(squares) || !squares.some(item => item === null)) {
      this.setState({
        resetGame: true,
      })
    }
  }

  handleDifficulty = event => {
    const difficulty = event === 'Easy' ? 'Easy' : 'Hard'
    this.setState({
      squares: Array(9).fill(null),
      difficulty
    })
  }

  resetGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      resetGame: false
    })
  }
}

export default App;
