import React, { Component } from 'react'

class Fave extends Component {

  state = {
    isFave: 'false'
  }

  handleClick = () => {
    // e.preventDefault()
    console.log('handling fave click')
    this.setState((prevState) => {
      return {
        isFave: !prevState.isFave
      }
    })
  }

  render() {
      return(
          <>
          <div className="film-row-fave add_to_queue"
          onClick={this.handleClick}>
          <p className="material-icons">add_to_queue</p>
          </div>
          </>
      )
  }

}


export default Fave