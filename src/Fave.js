import React, { Component, useState } from 'react';

class Fave extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isFave: false
        }
    }
    handleClick(e) {
        e.stopPropagation()
        this.setState((state, props) => {
            return{isFave: !this.state.isFave}
        });
        console.log(this.state.isFave)
      }

    render() {
        return (
          <div className={`film-row-fave ${this.state.isFave === false ? 'add_to_queue' : 'remove_from_queue'}`}  onClick={this.handleClick}>
            <p className="material-icons">add_to_queue</p>
          </div>  
        );
    }
}

export default Fave;