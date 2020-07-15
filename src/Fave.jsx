import React, { Component } from 'react';

export default class Fave extends Component {

  constructor() {
    super(props)
    this.state = {
      favorited: false
    }
  }

  handleClick = (e) => {
    console.log('handling favorites')
    e.stopPropagation()
    this.setState({
      favorited: !this.state.favorited
    })
  }

  render() {
    return (
      <div onClick={this.handleClick} className="film-row-fave add_to_queue">
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}

 