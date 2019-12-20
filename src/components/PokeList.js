import React from 'react';
import Pokemon from './Pokemon';
import Api from '../api/api.json';

function PokeList() {
    return (

        <ul>
            {(Api.map((api, key) => {
                return (

                    <Pokemon
                        key={key}
                        image={api.url}
                        name={api.name}
                        types={api.types.map(type => <li>{type}</li>)}
                    />
                )
            }
            )
            )
            }

        </ul>
    )
}

export default PokeList;