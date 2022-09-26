import React, { Component } from 'react'

export default class Fave extends Component {

    state = {
        isFave: false
    }

    handleClick = (e) => {
        e.stopPropagation()
        console.log("handling Fave click!")
        this.setState(prevState => {
            return {
                isFave: !prevState.isFave
            }
        })
    }

    render() {
        return (
            <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
                <p className="material-icons">add_to_queue</p>
            </div>  
        )
    }
}