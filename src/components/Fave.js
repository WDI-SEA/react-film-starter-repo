// import { useState } from 'react'

export default function Fave(props) {
    // const [fave, setFave] = useState({ isFave: false })
    function handleClick(e) {
        e.stopPropagation()
        console.log("handling Fave click!")

        props.onFaveToggle()
    }

    return (
        <div className={`film-row-fave add_to_queue ${props.isFave === true ? 'remove_from_queue' : 'add_to_queue'}`} onClick={handleClick}>
            <p className="material-icons">{props.isFave === true ? 'remove_from_queue' : 'add_to_queue'}</p>
        </div>
    )
}