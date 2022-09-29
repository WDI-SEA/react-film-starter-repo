// import { useState } from "react"

function Fave(props) {
//     const [isFave, setIsFave] = useState(false)


    let handleClick = (e) => {
        console.log("handling fave click!")
        e.stopPropagation()
        props.onFaveToggle()
    }

    
    return (
        <div className={`film-row-fave ${props.isFave ? 'remove_from_queue' : 'add_to_queue'}`} onClick={handleClick}>
            <p className="material-icons">add_to_queue</p>
        </div>
    )
    
}

export default Fave