import React, { Component } from 'react';

class Fave extends Component {
    state={
        isFave: false
    }

    
    handleClick = (e) => {
        e.stopPropagation()
        this.setState(prevState=>{
            return {
                isFave: !prevState.isFave
            }
        })
    }
    render() { 
        const action =  this.state.isFave?'remove_from_queue':'add_to_queue'
        return (
            <div onClick={this.handleClick} className={`film-row-fave ${action}`}>
                <p className="material-icons">add_to_queue</p>
            </div>
            
        );
    }
}
 
export default Fave;