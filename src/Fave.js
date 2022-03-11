import React, { Component } from 'react';


class Fave extends Component {
    state = {
        isFave: false
    }

    handleClick = (e) => {
        e.stopPropagation()
        console.log('handling Fave click!')
        this.setState((prevState)=> {
            return {
                isFave: !prevState.isFave
            }
        })
    }
    
    render() { 
        const action = this.state.isFave?'remove_from_queue':'add_to_queue'
        return (
            <>                                                                                     
                <div onClick={this.handleClick} className={`film-row-fave ${this.state.isFave ? 'remove_from_queue' : 'add_to_queue' }`}>
                    <p className="material-icons">{action}</p>
                </div>
            </>
        )
    }
}
 
export default Fave;