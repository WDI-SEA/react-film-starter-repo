import { useState } from 'react'

export default function Fave(props) {
    const [faveState, setFaveState] = useState({
        isFave: false
    })

    const handleClick = (e) => {
        e.stopPropagation()
        setFaveState(
            { isFave: !faveState.isFave }
        )
        console.log("handleClick")
    }

    return (
        <div onClick={handleClick} className={`film-row-fave ${faveState.isFave ? 'remove_from_queue' : 'add_to_queue'}`}>
            <p className="material-icons">{`${faveState.isFave ? 'remove_from_queue' : 'add_to_queue'}`}</p>
        </div>
    )

}