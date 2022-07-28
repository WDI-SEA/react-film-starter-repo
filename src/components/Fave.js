import React, { Component } from 'react';

class Fave extends Component {
    state = {
        isFave: false
    }
    handleClick = (e) => {
        console.log('Handling Fave click!')

        e.stopPropagation()
        this.setState((prevState) => {
            return {
                isFave: !prevState.isFave
            }
        })
    }

    render() {

        return (
            <div className={`film-row-fave ${this.state.isFave ? 'remove_from_queue' : 'add_to_queue'}`} onClick={this.handleClick}>
                <p className="material-icons">add_to_queue</p>
            </div>
        )

    } 
}

export default Fave