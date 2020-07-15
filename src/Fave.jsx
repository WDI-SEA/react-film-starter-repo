import React, { Component } from 'react';

class Fave extends Component {
    constructor() {
        super();
        this.state = {
            isFave: false
        }
        this.handleClick = (e) => {     // if we don't use an arrow function, must add "this.handleClick = this.handleClick.bind(this)"
            this.setState({isFave: !this.state.isFave});
            e.stopPropagation();
        }
    }
    render() {
        let queueClass = this.state.isFave ? "add_to_queue" : "remove_from_queue";
        return (
            <div 
                className={`film-row-fave ${queueClass}`}
                onClick={this.handleClick}
            >
                <p className="material-icons">{queueClass}</p>
            </div>
        );
    }
}

export default Fave;