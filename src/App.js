import React from 'react';
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
const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};


function App() {
  return (
    <div className="App">
      <ChoiceCard title="You" winner={false} imgURL={choices.rock} />
      <ChoiceCard title="Computer" winner={true} imgURL={choices.paper} />
      </div>
  )
}git status

export default App;

