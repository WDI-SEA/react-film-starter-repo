import React, { useState, useEffect } from 'react';

const Fave = (props) => {
    const [icon, setIcon] = useState('add_to_queue');
    const handleClick= e => {
        e.stopPropagation();
        props.onFaveToggle(props.film);
    }
    useEffect(() => {
        setIcon(props.isFave ? 'remove_from_queue' : "add_to_queue")
    })
    return (
        <div 
            className={`film-row-fave ${icon}`}
            onClick={(e) => handleClick(e)}
        >
            <p className="material-icons">{icon}</p>
        </div>
    );
}

export default Fave;