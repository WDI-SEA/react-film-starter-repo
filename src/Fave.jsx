import React, { useState, useEffect } from 'react';

function Fave(props) {
    const [isFave, setIsFave] = useState(false);
    // const [icon, setIcon] = useState('add_to_queue')

    // useEffect(() => {
    //     setIcon(props.isFave ? 'remove_from_queue' : 'add_to_queue')
    // }, [props.isFave])

    const handleClick = (e) => {
        e.stopPropagation()
        console.log("handling fave click!");
        // setIsFave(!isFave)
        props.onFaveToggle()
    }

let icon = props.isFave ? 'remove_from_queue' : 'add_to_queue'

    return (
        <div className={`film-row-fave ${icon}`} onClick={handleClick}>
            <p className="material-icons">{icon}</p>
        </div>
    );
}

export default Fave;