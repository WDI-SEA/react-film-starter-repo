import React, { Component } from 'react'

export default class Fav extends Component {
    state = {
        isFave: false
    }
    handleClick = () => {
        this.setState((previousState) => {
            return { isFave: previousState.isFave ? false : true }
        })
    }
    render() {
        return (
            <div
                onClick={(e) => {
                    e.stopPropagation()
                    this.handleClick()
                }}
                className={`film-row-fave ${this.state.isFave ? 'remove_from_queue' : 'add_to_queue'}`}
            >
                <p className="material-icons">{this.state.isFave ? 'remove_from_queue' : 'add_to_queue'}</p>
            </div>
        )
    }
}
