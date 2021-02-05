import React, { Component } from 'react'

class Fave extends Component {

    handleClick = (e) => {
        e.stopPropagation()
        console.log('handling fave click!')
    }

    render() {
        return(
            <div className="film-row-fave add_to_queue">
                <p onClick={this.handleClick}className="material-icons">add_to_queue</p>
            </div>
        )
    }
}

export default Fave