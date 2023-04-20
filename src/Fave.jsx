import React, { Component } from "react"

export default class Fave extends Component {
    handleClick = e => {
        console.log("fave click")
    }
    render(){
        return(
            <div className="film-row-Fave add_to_queue"
                onClick={this.handleClick}
            >
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}