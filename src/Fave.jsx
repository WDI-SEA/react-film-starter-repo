import React, { Component } from 'react';

class Fave extends Component {
  state = {
    isFave: false
  }

  handleClick = (e) => {
    e.stopPropagation()
    this.setState({isFave: !this.state.isFave})
    console.log("handling Fave click! 🏆")
  }
  render() {
    let icon= this.state.isFave ? "remove_from_queue" : "add_to_queue";
    return (
      <div
      className={`film-row-fave ${icon}`}
       onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}

export default Fave;