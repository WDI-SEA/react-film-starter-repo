import React, { Component } from 'react'

export default class Fave extends Component {
    state = {
        isFave: false
    }

    handleClick = e => {
        e.stopPropagation()
        this.setState((prevState) => {
            return {isFave: !prevState.isFave}
        })
        console.log('clicked')

    }

    render() {
        return (
            <div className={`film-row-fav ${this.state.isFave === true ? 'remove_from_queue' : 'add_to_queue'}`} onClick={this.handleClick}>
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}