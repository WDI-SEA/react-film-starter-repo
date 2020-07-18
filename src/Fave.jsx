import React, { useState, useEffect } from 'react';

function Fave(props) {

    const [isFave, setFave] = useState(false)



    useEffect(() => {
        console.log('fave set to', isFave)
    },
        [isFave])

    const handleClick = (e) => {
        e.stopPropagation()
        setFave(!isFave)
    }

    const classText = isFave ? "remove_from_queue" : "add_to_queue"


    return (
        <div onClick={handleClick} className={`film-row-fave ${classText}`}>
            <p className="material-icons">add_to_queue</p>
        </div>


    );


}

export default Fave;