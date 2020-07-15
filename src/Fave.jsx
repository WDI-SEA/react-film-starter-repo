import React, { Component } from 'react';

class Fave extends Component {
    render() {
    
        // handleClick = (e) => {
        //     console.log("handling Fave click!")
        // }

        return (
            <div className="film-row-fave add_to_queue">
                <p className="material-icons">add_to_queue</p>
            </div>
        );
    }
}

export default Fave;