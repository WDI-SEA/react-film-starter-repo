import React, { Component } from "react";

class Fave extends Component {
    state = {
        isFave: false
    }
    handleClick = e => {
        e.stopPropagation();
        this.setState(prevState => {
            return {isFave: !prevState.isFave}
        });
    }
    render() {
        const action = this.state.isFave ? "remove_from_queue" : "add_to_queue";
        return (
            <div className={`film-row-fave ${action}`} onClick={this.handleClick}>
                <p className="material-icons">{action}</p>
            </div>
        );
    }
}

export default Fave;
