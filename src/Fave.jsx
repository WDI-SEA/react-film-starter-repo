// import React, { useState } from 'react';

const Fave = (props) => {

    // const [isFave, setFave] = useState(false)

    const handleClick = (e) => {
        e.stopPropagation()

        console.log('Handling a click!')

        props.onFaveToggle()

    }

    return (
        <>
            {/* <div className="film-row-fave add_to_queue" onClick={this.handleClick}> */}
            <div className={`film-row-fave ${props.isFave ? "remove_from_queue" : "add_to_queue"}`} onClick={handleClick}>
                <p className="material-icons" >add_to_queue</p>
            </div>
        </>
    )
}


export default Fave;
