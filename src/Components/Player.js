import React from "react";
import Counter from './Counter'

const Player = ({removePlayer, name, score, id, changeScore}) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        {name}
      </span>

      <Counter score={score}
        changeScore={changeScore}
        id={id}
      />
    </div>
  );
}

export default Player