import React, { useState } from 'react';

const Fave = (props) => {
  // const [isFave, setIsFave] = useState(false); No longer used here and moved to parent 
  
  const handleClick = e => {
    e.stopPropagation()
    props.onFaveToggle()
    console.log('Handling Fave click!')
  };  
    // Delete the `setIsFaves` line. You no longer track state here
    // setIsFave(!isFave)

    // When isFave is true, icon to be remove_from_queue
    let icon = props.isFave ?
    "remove_from_queue" : "add_to_queue";

    return (
      <div 
        className={`film-row-fave ${icon}`} 
        onClick={handleClick}>
        <p className="material-icons">{icon}</p>
        
      </div>
    );
  }


export default Fave;