import React from 'react';

const Fave = (props) => {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log('Handling Fave click!');
    props.onFaveToggle();
  };

  const isFave = props.isFave ? 'remove_from_queue' : 'add_to_queue';

  return (
    <div className={`film-row-fave ${isFave}`} onClick={handleClick}>
      <p className="material-icons">{isFave}</p>
    </div>
  );
};

export default Fave;
