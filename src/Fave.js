// import React, { Component } from 'react'
import { useState } from 'react'

export default function Fave(props){
    
    const [isFave, setIsFave] = useState(false)
    // const [isGabe, setIsGabe] = useState(true)

    const handleClick = (e) =>  {
        e.stopPropagation()
        setIsFave(!isFave)
    }

    const action = isFave?'remove_from_queue':'add_to_queue'
    
    return(
        <div 
            className={`film-row-fave ${action}`}
                onClick={handleClick}
        >
            <p className="material-icons">add_to_queue</p>
        </div>

    )
    
}