import React, { Component } from 'react';

class Fave extends Component {
  constructor() {
    super()
    this.state = {
      isFave: false,
    }
  }

  handleClick = (e) => {
    e.stopPropagation()
    console.log("handling fave click!");
    this.setState({isFave: !this.state.isFave})
	}


  render() {
    let icon = this.state.isFave ? 'remove_from_queue' : 'add_to_queue'

    return (
      <div className={`film-row-fave ${icon}`} onClick={this.handleClick}>
        <p className="material-icons">{icon}</p>
      </div>
    );
  }
}

export default Fave;