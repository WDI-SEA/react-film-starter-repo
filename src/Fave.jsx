import React, { useState, useEffect } from 'react';


const Fave = (props) => {
    const [faved, setFaved] = useState(false)
    

    let icon = faved ? 'remove_from_queue' : 'add_to_queue'
    return (
        <div className={`film-row-fave ${icon}`} onClick={() => setFaved(!faved)}>
            <p className="material-icons">{icon}</p>
        </div>
    );

}

export default Fave;