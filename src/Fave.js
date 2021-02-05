import React, { Component } from 'react'

class Fave extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFave: false,
    }
  }

  handleClick = (e) => {
    e.stopPropagation()
    console.log('handling Fave Click')
    this.setState({isFave: !this.state.isFave})
    console.log(this.state.isFave)
  }

  render() {

    return (
      <div onClick={this.handleClick} className={`film-row-fave ${this.state.isFave ? 'remove_from_queue' : 'add_to_queue'}`}>
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}

export default Fave