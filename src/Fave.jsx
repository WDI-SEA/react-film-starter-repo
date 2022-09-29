import { useState } from 'react';
export default function Fave(props) {

    const [isFave, setIsFave] = useState(false)

    const handleClick = e=> {
        e.stopPropagation()
        console.log('handling Fave Click!')
        props.onFaveToggle()
    }

    const action = isFave ? 'remove_from_queue' : 'add_to_queue'
        
    return(
            <div onClick={handleClick} className={`film-row-fave ${action}`}>
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }