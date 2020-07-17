import React, { useState, useEffect } from 'react';

export default function Fave(props) {
    // this.state = {
    //   isFave: false
    // }
  const [isFave, setFave] = useState(false);
  const [icon, setIcon] = useState('add_to_queue')

  useEffect(() => {
    setIcon(isFave ? 'remove_from_queue' : 'add_to_queue');
    }, [isFave] 
  )

  const handleClick = (e) => {
    e.stopPropagation()
    setFave(!isFave)
    console.log('isFave:', isFave);
  }

  return (
    <div  onClick={ handleClick }  
          className={ `film-row-fave ${icon}` }
    >
      <p className="material-icons">add_to_queue</p>
    </div>
  );

}
