import React, { useState } from "react";
import Header from "./Header";
import Player from "./Player";


const App = () => {
  const [players, setPlayers] = useState(
    [
      {
        name: "Christian",
        score: 0,
        id: 1
      },
      {
        name: "Jed",
        score: 0,
        id: 2
      },
      {
        name: "Keo",
        score: 0,
        id: 3
      },
      {
        name: "Bryan",
        score: 0,
        id: 4
      }
    ] 
      )
  

    const handleRemovePlayer = (id) => {
    setPlayers(players.filter( p => p.id !== id))
  }

    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers={players.length}
        />

        {/* Players list */}
        {players.map(player =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            removePlayer={handleRemovePlayer}
          />
        )}
      </div>
    );

}

export default App