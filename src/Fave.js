import React, {Component} from 'react'

class Fave extends Component{
    constructor(){
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
    }
    stae={
        isFave:false
    }
    handleClick=(e)=>{
        e.stopPropagation()
        console.log("I'm clicking")
        this.setState
    }
    render(){
        return(
            <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}

export default Fave