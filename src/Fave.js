import React, { Component } from 'react'

class Fave extends Component {
    state = {
        isFave: false
    }
    
    handleClick = (e) => {
        console.log("Handling Fave click!")
        e.stopPropagation()
        this.setState({isFave: !this.state.isFave}) // Can also use a ternery statement for toggle.
    }
    render() {
        return (
            <div onClick={(e) => this.handleClick(e)} className={`film-row-fave ${this.state.isFave ? 'remove_from_queue' : 'add_to_queue'}`}>
                <p className="material-icons"> {this.state.isFave ? 'remove_from_queue' : 'add_to_queue'} </p>
            </div>
        )
    }
}

export default Fave