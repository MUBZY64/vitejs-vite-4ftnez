// src/App.js
import React, { useState } from 'react';
import './App.css';

const options = ['Rock', 'Paper', 'Scissors'];

const App = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);

  const playGame = (userPick) => {
    const computerPick = options[Math.floor(Math.random() * options.length)];
    setUserChoice(userPick);
    setComputerChoice(computerPick);
    determineWinner(userPick, computerPick);
  };

  const determineWinner = (userPick, computerPick) => {
    if (userPick === computerPick) {
      setResult("It's a tie!");
      setDraws(draws + 1);
    } else if (
      (userPick === 'Rock' && computerPick === 'Scissors') ||
      (userPick === 'Paper' && computerPick === 'Rock') ||
      (userPick === 'Scissors' && computerPick === 'Paper')
    ) {
      setResult('You win!');
      setWins(wins + 1);
    } else {
      setResult('You lose!');
      setLosses(losses + 1);
    }
  };

  return (
    <div className="game-container">
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        {options.map(option => (
          <button
            key={option}
            className="choice-button"
            onClick={() => playGame(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {userChoice && (
        <div className="result">
          <h2>Your choice: {userChoice}</h2>
          <h2>Computer's choice: {computerChoice}</h2>
          <h2>{result}</h2>
        </div>
      )}
      <div className="scoreboard">
        <h3>Scoreboard</h3>
        <p>Wins: {wins}</p>
        <p>Losses: {losses}</p>
        <p>Draws: {draws}</p>
      </div>
    </div>
  );
};

export default App;
