import React, { useState } from 'react'

export default function Fave(props) {

   
    const handleClick = e => {
        e.stopPropagation()
        console.log('Handling Fave click!')
      
        // this'll call the function passed through props
        props.onFaveToggle()
      
    }

        const action = props.isFave ? 'remove_from_queue' : 'add_to_queue' 

        return (
            <div className={`film-row-fave  ${action}`}
                onClick={handleClick}
            >
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
