import React, { useState } from 'react';

const Fave = () => {
  const [isFave, setIsFave] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    console.log('fave click');
    setIsFave((prevIsFave) => !prevIsFave);
  };

  const action = isFave ? 'remove_from_queue' : 'add_to_queue';
  return (
    <div className={`film-row-fave ${action}`} onClick={handleClick}>
      <p className="material-icons">add_to_queue</p>
    </div>
  );
};

export default Fave;
