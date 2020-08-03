import React, { useState } from 'react'

const Fave = (props) => {
    let toggle = props.faved ? 'remove_from_queue' : 'add_to_queue'
    const handleClick = e => {
        e.stopPropagation()
        console.log('Handling Fave click!')
        // Add this line. You'll call the function passed through props
        props.onFaveToggle()
      
        // Delete the `setIsFaves` line. You no longer track state here
        // setIsFave(!isFave)
      }

    return (
        <div className={`film-row-fave ${toggle}`} onClick={(e) => handleClick(e)}>
            <p className="material-icons">{toggle}</p>
        </div>
    );
}

export default Fave;



// const [faved, setFaved] = useState(false)

// let icon = faved ? 'remove_from_queue' : 'add_to_queue'