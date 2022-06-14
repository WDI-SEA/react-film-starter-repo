import React, { } from 'react'


export default function Fave(props) {


    // handlers
    const handleClick = e => {
        e.stopPropagation()
        console.log('handling Fave click')

        //youll call the functioin passed through props 
        props.handleFaveToggle()
    }


    return (
        <div className={`film-row-fave  ${props.isFave === true ? 'remove_from_queue' : 'add_to_queue'}`} onClick={handleClick}>
            <p className="material-icons">{`${props.isFave === true ? 'remove_from_queue' : 'add_to_queue'}`}</p>
        </div>
    )
}