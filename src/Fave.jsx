import React, { useState, useEffect } from 'react';

const Fave = (props) => {

    const [toggle, setToggle] = useState('add_to_queue')

    useEffect(() => {
        setToggle(props.isFave ? 'remove_from_queue' : 'add_to_queue')
    }, [props.isFave])

    const handleClick = e => {
        e.stopPropagation()
        console.log("Handling Fave click!")
        props.onFaveToggle()
    }

    return (
        <div className={`film-row-fave ${toggle}`} onClick={(e) => handleClick(e)} 
            className={`film-row-fave`}>
            <p className="material-icons">{toggle}</p>
        </div>
    );
}

export default Fave;