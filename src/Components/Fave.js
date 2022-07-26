import React, { Component } from 'react'

class Fave extends Component {

    state = {
        isFave: false
    }

    handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log('handling fave click')
        this.setState((prevState)=>{ return {isFave: !prevState.isFave} })
    }
    
    render() {
        return (
            <div>
                <div 
                    className={`film-row-fave ${this.state.isFave === true ? 'remove_from_queue' : 'add_to_queue' }`}
                    onClick={this.handleClick}    
                >
                    <p className="material-icons">add_to_queue</p>
                </div>
            </div>
        )
    }
}

export default Fave
