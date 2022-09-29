import React, { useState } from 'react'

export default function Fave(props) {

    const handleClick = (e, film) => {
        props.onFaveToggle()
    }
    return (
        <div className={`film-row-fave ${props.isFave ? "remove_from_queue" : "add_to_queue"}`} onClick={handleClick}>
            <p className={`material-icons`} >add_to_queue</p>
        </div>
    )
}