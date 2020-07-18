import React, { useState } from 'react';

const Fave = (props) => {
//   const [isFave, setIsFave] = useState(false);


  const handleClick = (e) => {
    e.stopPropagation();
    // set isFave = !isFave
    props.onFaveToggle()
    console.log("Handling Fave click");
  }

    // When isFave is true, icon to be remove_from_queue

    let icon = props.isFave ? "remove_from_queue" : "add_to_queue";
    return (
      <div
        className={`film-row-fave ${icon}`}
        onClick={handleClick}
        >

        <p className="material-icons">{icon}</p>
      </div>
    );
  }
export default Fave;