import React, { Component } from 'react';

class Fave extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        console.log('Click happened');
      }
    render() {
        return (
          <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
            <p className="material-icons">add_to_queue</p>
          </div>  
        );
    }
}

export default Fave;