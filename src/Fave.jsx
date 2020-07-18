import React, { useState, useEffect } from 'react';

const Fave = (props) => {

    const handleClick = (e) => {
        e.stopPropagation()
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