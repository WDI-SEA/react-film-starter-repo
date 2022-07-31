import React, { Component } from 'react';



class Fave extends Component {




    render() {

        const handleClick = (e) => {
            console.log('handling fave');

        }

        return (

            <>
            <div className="film-row-fave add_to_queue">
                <p className="material-icons" onClick={handleClick}>add_to_queue</p>
            </div>
            </>

        )
    }
}

export default Fave;