import React, { Component } from 'react';

// handleClick = (e) => {
//     console.log("handling Fave click")
// }

export default class Fave extends Component {

    constructor() {
        super()
        this.state = {
            isFave: false
        }
    }

    handleClick = (e) => {
        e.stopPropagation()
        console.log("handling Fave click")
        this.setState({isFave: !this.state.isFave})
    }

    render() {
        return (
            <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
                <p className="material-icons">add_to_queue</p>
            </div>
        );
    }
}