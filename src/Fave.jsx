import React, { Component } from 'react';
import './App.css'

class Fave extends Component {
  state = {
      isFave: false
  };

  handleClick=(e)=>{


    this.setState((prevState, props)=>{

        return {isFave: !prevState.isFave}
    })


  }

  render() {
    return (
      <div onClick={this.handleClick} className={`film-row-fave ${this.state.isFave === false ? 'remove_from_queue' : 'add_to_queue'}`}>
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}

// className={`film-list-filter ${this.state.filter === "all" ? 'is-active' : ''}`}

export default Fave;
