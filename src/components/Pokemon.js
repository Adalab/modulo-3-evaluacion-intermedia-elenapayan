import React from 'react';



function Pokemon(props) {
    return (
        <li>
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <ul>Tipos:
            <li>{props.types}</li>
            </ul>
        </li >

    );
}

export default Pokemon;