import React from 'react';
import '../stylesheets/App.css';
import PokeList from './PokeList';
import Api from '../api/api.json';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      api: Api
    };
  }

  render() {
    return (
      <div>
        <PokeList>
          {this.state.api.map((ap, key) => {
            return <Pokemon
              key={key}
              pokemon={ap}
            />
          })}
        </PokeList>
      </div >
    )
  }
}

export default App;
