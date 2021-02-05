import React, { Component } from 'react'

class Fave extends Component {
    constructor(){
        super()
        this.state={
            isFave: false
        }
    }
    handleClick = (e) => {
        console.log("handling fave click")
        e.stopPropagation(e)
        this.setState({
            isFave: !this.state.isFave
        })
    }

    render() {
        let isFavorited = this.state.isFave ? "remove_from_queue" : "add_to_queue"
        return (
            <div className={`film-row-fave ${isFavorited}`} onClick={this.handleClick}>
                <p className="material-icons">{`${isFavorited}`}</p>
            </div>
        )
    }
}

export default Fave