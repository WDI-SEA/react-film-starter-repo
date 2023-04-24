import React, {useState} from "react"

export default function Fave(props){
    // const [isFave,setIsFave] = useState(false)

   const handleClick = e => {
        e.stopPropagation()
        // setIsFave(!isFave)
        props.onFaveToggle()
    }

        const action = props.isFave ? "remove_from_queue" : "add_to_queue"

        return(
            <div onClick={handleClick}className={`film-row-fave add_to_queue${action}`}>
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }