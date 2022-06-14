import React, { useState, useEffect } from 'react';

function Fave(props) {
    const [isFave, setIsFave] = useState(false);
    const [action, setAction] = useState('add_to_queue')
    

    const handleClick = (e) => {
        e.stopPropagation()
        console.log("fave click")
        setIsFave(!isFave)

    }
    useEffect(()=>{
        setAction(isFave ? 'remove_from_queue' : 'add_to_queue')
      }, [isFave])

    
    return (
        <div className={`film-row-fave ${action}`}
            onClick={handleClick}>
            <p className="material-icons">{action}</p>
        </div>
    )

}
export default Fave;