import React, { useState , useEffect } from 'react';

const Fave = (props) => {
  const [icon, setIcon] = useState('add_to_queue')

  useEffect(() => {
    setIcon(props.isFave ? 'remove_from_queue' : 'add_to_queue')
  }, [props.isFave])

  const handleClick = (e) => {
    e.stopPropagation()
    console.log("handlong fave click!")
    props.onFaveToggle()
  }

  return (
    <div className={`film-row-fave ${icon}`} onClick={handleClick}>
      <p className="material-icons">{icon}</p>
    </div>
  );
    
}

export default Fave;