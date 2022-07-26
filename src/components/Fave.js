import React, { Component } from 'react'

export default class Fave extends Component {
    
    state = {
        isFave: false
    }

    handleClick = (e) => {
        e.stopPropagation()
        console.log("handle click")
        this.setState({"isFave": !this.state.isFave})
      }

    action = this.state.isFave?'remove_from_queue':'add_to_queue'

    render() {

    return (
        <div className={`film-row-fave ${this.state.isFave?'remove_from_queue':'add_to_queue'}`} onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}
