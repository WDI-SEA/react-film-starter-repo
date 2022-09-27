import React, { Component } from 'react'

export default class Fave extends Component {

    state = {
        isFave: false
    }

    handleClick = (e) => {
        //this is on the inner click event, we won't trigger the out click event the "handleDetailsClick" event
        e.stopPropagation()
        console.log('fave clicked!')
        this.setState(prevState => {
            return {
                isFave: !prevState.isFave
            }
        })

    }

    
    render() {
        const action = this.state.isFave?'remove_from_queue':'add_to_queue'
    return (
        <div className={`film-row-fave ${this.state.isFave ? 'remove_from_queue' : 'add_to_queue'}`} onClick={this.handleClick}>
            <p className='material-icons'>{action}</p>

        </div>
    )
    } 
} 
