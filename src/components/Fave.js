import { useState } from 'react'

export default function Fave(props) {
    const [fave, setFave] = useState({isFave: false})
    function handleClick(e){
        e.stopPropagation()
        setFave({
            isFave: !fave.isFave
        })
        }
        console.log("handling Fave click!")
        return(
            <div className={`film-row-fave add_to_queue ${fave.isFave === true ? 'remove_from_queue' : 'add_to_queue' }`} onClick={handleClick}>
                 <p className="material-icons">{fave.isFave === true ? 'remove_from_queue' : 'add_to_queue' }</p>
            </div>
        )
}