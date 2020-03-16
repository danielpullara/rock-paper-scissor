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

export default function ChoiceCard(props) {
    console.log("Props:", props);
    return (
        <div
            className={`choice-card ${props.winner ? 'winner' : 'loser'}`}
        >
            <h1>{props.title}</h1>
            <img src={props.imgURL} alt={props.title} />
            <h3>{props.winner ? 'Won' : 'Loss'}</h3>
        </div>
    )
}

