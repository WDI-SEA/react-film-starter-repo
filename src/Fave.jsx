import React from 'react';

const Fave = (props) => {
  // const [isFave, setIsFave] = useState(false);
  // const [icon, setIcon] = useState('add_to_queue')

  let toggle = props.isFave ? 'remove_from-queue' : 'add_to_queue'

  const handleClick = (e) => {
    e.stopPropagation()
    console.log("handling Fave click! 🏆")
    // setIsFave(!isFave)
    props.onFaveToggle()
  }
    return (
      <div
      className={`film-row-fave ${toggle}`}
       onClick={(e) => handleClick(e)}>
        <p className="material-icons">{toggle}</p>
      </div>
    );
  }


export default Fave;