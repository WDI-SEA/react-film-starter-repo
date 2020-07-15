import React, { Component } from 'react';

class Fave extends Component {
    constructor() {

        super();


        this.state = {
            isFave: false
        }
    }
    handleClick = (e) => {
        console.log("handling click on faves")
        e.stopPropagation()
        this.setState({
            isFave: !this.state.isFave
        })
    }


    render() {
        return (
            <div className={`film-row-fave ${ this.state.isFave ? "remove_from_queue" : "add_to_queue" } `} onClick={this.handleClick}>
                <p className="material-icons">{`${ this.state.isFave ? "remove_from_queue" : "add_to_queue" }`}</p>
            </div>
        );
    }
}

export default Fave;