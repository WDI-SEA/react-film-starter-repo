import React, { Component } from 'react'

export default class Fave extends Component {
    state = {
        isFave: false
    }
    handleClick = e => {
        e.stopPropagation()
        this.setState((prevState)=>{
            return {
                isFave: !prevState.isFave
            }
        })
        console.log("handling Fave click!")
    }
    render(){
        return(
            <div className={`film-row-fave add_to_queue ${this.state.isFave === true ? 'remove_from_queue' : 'add_to_queue' }`} onClick={this.handleClick}>
                 <p className="material-icons">{this.state.isFave === true ? 'remove_from_queue' : 'add_to_queue' }</p>
            </div>
        )
    }
}