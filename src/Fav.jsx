import React, { useState, useEffect } from 'react';

const Fave = (props) => {

    //const [isFave, setIsFave] = useState(false)
    const [icon, setIcon] = useState('add_to_queue')

    const handleClick = (e) => {
        e.stopPropagation()
        props.onFaveToggle()
    }
    
    useEffect(() => {
        setIcon(props.isFave ? "remove_from_queue" : "add_to_queue")
    }, [props.isFave])

    return (
        <div className={`film-row-fave ${icon}`} onClick={handleClick}>
            <p className="material-icons">{icon}</p>
            
        </div>
    );
}

export default Fave;