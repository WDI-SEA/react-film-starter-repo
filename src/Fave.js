import React, { Component } from 'react';

class Fave extends Component {
    render() {
        return (
            <div className="film-row-fave add_to_queue" onClick={this.props.onClick}>
                <p className="material-icons">add_to_queue</p>
            </div>
        );
    }
}

export default Fave;
