import React from "react";

const AddPlayerForm = () => {
  return ( 
    <form>
      <input
      type= 'text'
      placeholder="Enter a player's name"
      />
      <input
      type = 'submit'
      placeholder="Add Player"
      />
    </form>
   );
}
 
export default AddPlayerForm;