import React, { Component } from 'react';

class Fave extends Component {

    state= {
        isFave: false
    }

    handleClick = (e) => {
        e.stopPropagation() // what is event propagation? what exactly is going on here
        console.log('handling Fave click')
        this.setState((prevState) => {
            // toggle the value of isFave --> meaning you want the new value to be the OPPOSITE of the current value
            return { isFave: !prevState.isFave}
        })
    }
    render() { 
        const action = this.state.isFave?'remove_from_queue':'add_to_queue'
        return (
            <div onClick={this.handleClick} className={`film-row-fave ${action}`}>
                <p className="material-icons">{action}</p>
            </div>
        );
    }
}
 
export default Fave;