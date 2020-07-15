import React, { Component } from 'react';

class Fave extends Component {
  constructor() {
    super();
    this.state = {
      isFave: false
    }
  }
  
  handleClick = (e) => {
    e.stopPropagation();
    // set isFave = !isFave
    this.setState({isFave: !this.state.isFave});
    console.log("Handling Fave click");
  }

  render() {
    // When isFave is true, icon to be remove_from_queue
    let icon = this.state.isFave ?
    "remove_from_queue" : "add_to_queue";
    return (
      <div 
        className={`film-row-fave ${icon}`} 
        onClick={this.handleClick}>
        <p className="material-icons">{icon}</p>
        
      </div>
    );
  }
}

export default Fave;