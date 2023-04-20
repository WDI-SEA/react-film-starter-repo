import React, { Component } from 'react'

export default class Fave extends Component {

    state = {
        isFave: false
    }

    handleFaveClick = e => {
        e.stopPropagation()
        console.log("handling Fave click!!")
        this.setState(prevState => {
            return {
                isFave: !prevState.isFave
            }
        })
    }

    render() {
        const action = this.state.isFave ? "remove_from_queue" : "add_to_queue"
        return(
            <div 
                className={`film-row-fave add_to_queue ${action}`}
                onClick={this.handleFaveClick}
            >
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}