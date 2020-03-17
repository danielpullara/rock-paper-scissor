// import React from 'react';

// function Box (props) {
//     return (
//         <div className={props.color}>
//             <h1>{props.name}</h1>
//             <div>{props.color}</div>
//             <h3>{props.win?"Won":"Loss"}</h3>
//             <div>{props.num}</div>
//         </div>
//     )
// }

// export default Box; 

import React from 'react';

export default function (props) {
    console.log("Props:", props);
    const outcome = (winner, title) => {
        if(winner === "Tie game!")
        return "Tie"
        else if (winner === title)
        return "Won"
        else return "Lost"
    }

    return (
        <div
            className={`choice-card ${outcome(props.winner, props.title) === "Won" ? 'winner' : 'loser'}`}
        >
            <h1>{props.title}</h1>
            <img src={props.imgURL} alt={props.title} />
            <h3>{outcome(props.winner, props.title)}</h3>
        </div>
    )
}

