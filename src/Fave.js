import React, { Component } from 'react';

class Fave extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            isFave: false
        }
    }

    handleClick = (e) => {
        this.setState({ isFave: !this.state.isFave })

        e.stopPropagation()

    }

    render() {



        return (
            <div onClick={this.handleClick} className={"film-row-fave " + (this.state.isFave ? "remove_from_queue" : "add_to_queue")} >
                <p className="material-icons">{(this.state.isFave ? "remove_from_queue" : "add_to_queue")} </p>
            </div>
        );
    }
}

export default Fave;