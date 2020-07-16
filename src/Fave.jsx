import React, { useState } from 'react';

 const Fave = (props) => {

  const [faved, setFaved] = useState(false)

    let toggle = faved ? 'remove_from_queue' : 'add_to_queue'

    return (
      <div onClick={() => setFaved(!faved)} 
      className={`film-row-fave ${toggle}`}>
        <p className="material-icons">{toggle}</p>
      </div>
    );
}

export default Fave