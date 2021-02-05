import React, { Component } from 'react'

class Fave extends Component {
    state = {
        isFave: false
    }
   
    handleClick = (e) => {
        e.stopPropagation()
        this.setState({isFave: !this.state.isFave})
        console.log('handling fave click!')
    }

    render() {
        return(
            <div className={`film-row-fave ${this.state.isFave ? 'add_to_queue' : 'remove_from_queue'}`}>
                <p innerText={`${this.state.isFave ? 'add to queue' : 'remove from queue'}`} onClick={this.handleClick}className="material-icons">add to queue</p>
            </div>
        )
    }
}

export default Fave