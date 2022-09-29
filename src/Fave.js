import { useState } from "react"

export default function Fave(props){

    const [isFave, setIsFave] = useState(false)

    const handleClick = e => {
        e.stopPropagation()
        setIsFave(!isFave)
        console.log('clicked')

    }
        return (
            <div className={`film-row-fav ${isFave === true ? 'remove_from_queue' : 'add_to_queue'}`} onClick={handleClick}>
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
