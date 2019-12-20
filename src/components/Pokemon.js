import React from 'react';


function Pokemon(props) {
    const types = props.pokemon.types;
    return (
        <li className="pokemon-card">
            <img src={props.pokemon.url} alt={props.pokemon.name} />
            <h2>{props.pokemon.name}</h2>
            <ul>{types.map((type, key) => {
                return (
                    <li key={key}>
                        {type}
                    </li>
                )
            }
            )
            }
            </ul>
        </li >
    );
}

export default Pokemon;