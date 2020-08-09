import React, { Component, useState } from 'react';

class Fave extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.stopPropagation()
        this.props.onFaveToggle()
      }

    render() {
        return (
          <div className={`film-row-fave ${this.props.isFave === false ? 'add_to_queue' : 'remove_from_queue'}`}  onClick={this.handleClick}>
            <p className="material-icons">add_to_queue</p>
          </div>  
        );
    }
}

export default Fave;