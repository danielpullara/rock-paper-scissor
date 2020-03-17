import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import ChoiceCard from "./components/ChoiceCard";

// function App() {
//   return (
//     <div className="App">
//       Hello! World 
//       <Box name="Box1" color="red" win={true} num={1}>Box1</Box>
//       <Box name="Box2" color="orange" win={false} num={2}>Box2</Box>
//       <Box name="Box3" color="blue" win={false} num={3}>Box3</Box>


//     </div>
//   );
// }
export const CHOICES = {
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  }
};

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};

export const getRoundOutcome = userChoice => {
  const computerChoice = getRandomChoice().name; 
  
  let result;
  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "You" : "Computer";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "You" : "Computer";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "You" : "Computer";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice];
};


export const getRandomChoice = () => {
  let choiceNames = Object.keys(choices);
  let randomIndex = Math.floor(Math.random() * 3);
  let choiceName = choiceNames[randomIndex];
  return CHOICES[choiceName];
};

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null)
  // const [prompt, onPlayerChoose] = useState('Start')
  // const [result, setResult] = useState()

  const onPlayerChoose = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice); 
    console.log(result, compChoice)
    
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    setResult(result)
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };

  return (
    <div className="App">
      <div className="App">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-8 themed-grid-col">
              <div><ChoiceCard title="You" winner={result} imgURL={playerChoice && playerChoice.url} /></div>
              <h1> {playerChoice && playerChoice.name}</h1>
              <div><ChoiceCard title="Computer" winner={result} imgURL={computerChoice && computerChoice.url} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button
          className="btn btn-success btn-lg"
          onClick={() => onPlayerChoose("rock")}
        >   
          Rock
  </button>
        <button
          className="btn btn-success btn-lg"
          onClick={() => onPlayerChoose("paper")}
        >
          Paper
  </button>
        <button
          className="btn btn-success btn-lg"
          onClick={() => onPlayerChoose("scissors")}
        >
          Scissors
  </button>
      </div>
    </div>
  )
}


export default App;

