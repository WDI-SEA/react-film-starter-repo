import React from 'react';

const Fave = (props) => {
   
    //no longer used, handleClick in App parent
    // const [isFave, setIsFave] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation()
        //set isFave = !
        // setting isFave to an object key that we want it to be 
        // setIsFave takes in 1 parameter, that is the new value of the setIsFave
        props.onFaveToggle()
        console.log("handling Fave click!🐳") 
    }

        //When isFave is true, I wnat icon to be remove_from_queue
        let icon = props.isFave ? "remove_from_queue" : "add_to_queue";

        return (
            <div className={`film-row-fave ${icon}`} 
            onClick={handleClick}>

                <p className="material-icons">{icon}</p>
            </div>
        );
    }


export default Fave;