import React, { Component } from "react";

class Fave extends Component {

  state = {
    isFave: false
  }

  handleClick = (e) => {
    this.setState((prevState) => { 
      return {isFave: !prevState.isFave} })
    // console.log('handling Face click!')
  }

  render() {
    return (
      <div onClick= {this.handleClick} className={`film-row-fave ${this.state.isFave === false ? 'remove_from_queue' : 'add_to_queue'}`}>
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}

export default Fave;
