import React from "react";
import "./App.css";
import Card from "./Card.js";
import Pokemon from "./Pokemon.js";

const TRAINERS_URL = "http://localhost:3000/trainers";
const POKEMONS_URL = "http://localhost:3000/pokemons";

class App extends React.Component {
  state = { data: [] };

  componentDidMount = () => {
    this.fetchPokemon();
  };

  fetchPokemon = () => {
    fetch(TRAINERS_URL)
      .then(resp => resp.json())
      .then(data => this.setState({ data }));
  };

  addNewPokemon = trainerId => {
    if (
      this.state.data.find(trainer => trainer.id === trainerId).pokemons
        .length > 5
    )
      return;
    fetch(POKEMONS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        trainerId: trainerId
      })
    })
      .then(resp => resp.json())
      .then(data => {
        const updatedData = this.state.data.map(trainer => {
          if (trainer.id !== trainerId) {
            return trainer;
          }
          return {
            ...trainer,
            pokemons: [...trainer.pokemons, data]
          };
        });
        this.setState({ data: updatedData });
        console.log(updatedData);
      });
  };

  releasePokemon = (trainerId, pokemonId) => {
    // console.log(this.state);
    fetch(POKEMONS_URL + "/" + pokemonId, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(() => {
        const updatedData = this.state.data.map(trainer => {
          if (trainer.id !== trainerId) {
            return trainer;
          }
          return {
            ...trainer,
            pokemons: trainer.pokemons.filter(p => p.id !== pokemonId)
          };
        });
        this.setState({ data: updatedData });
      });
  };

  render() {
    return (
      <div>
        <header>
          <h2>Pokemon Teams!</h2>
        </header>
        <main>
          {this.state.data.map(trainer => {
            return (
              <Card
                trainer={trainer}
                key={trainer.id}
                releasePokemon={this.releasePokemon}
                addNewPokemon={this.addNewPokemon}
              />
            );
          })}
        </main>
      </div>
    );
  }
}

export default App;
