import React, { Component } from 'react'

export default class Fave extends Component {
    state = {
        isFave: false
    }
    handleClick = (e) => {
        console.log("what up SLATTT")
        this.setState({ isFave: !this.state.isFave })
        e.stopPropagation()
    }
  render() {
    return (
        <div onClick={this.handleClick} className={`film-row-fave ${this.state.isFave === true ? 'remove_from_queue' : 'add_to_queue' }`}>
        <p className="material-icons" >add_to_queue</p>
      </div>
    )
  }
}
