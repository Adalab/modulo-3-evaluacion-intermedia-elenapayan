import React from 'react';


function PokeList(props) {
    return (

        <ul className="pokemon-list">
            {props.children}
        </ul>
    )
}

export default PokeList;