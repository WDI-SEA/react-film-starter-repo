import React, { Component } from "react"

export default class Fave extends Component {
    state = {
        isFave: false
    }

    handleClick = (e) => {
        e.stopPropagation()
        console.log("handling Fave Click!")
        this.setState((prevState)=>{ return {isFave: !prevState.isFave} })
    
    }
    render() {
        return (
            <div className={`film-row-fave ${this.state.isFave ? "remove_from_queue" : "add_to_queue"}`}>
                <p className="material-icons"
                   onClick={this.handleClick} 
                >
                    add_to_queue
                    remove_from_queue
                </p>
            </div>
        )
    }
}