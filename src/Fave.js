import React, { Component } from "react"

export default class Fave extends Component{
    state= {
        isFave: false
    }

    handleClick = (e) =>{
        // console.log("handleclick")
        e.stopPropagation()
        this.setState((prevState)=>{ 
            return {
                isFave: !prevState.isFave
            }
         })
    }

    render(){
        const action =this.state.isFave ? "remove_from_queue" : "add_to_queue"
        return(
            <div className= {`film-row-fave ${action}`}

                onClick={this.handleClick}>
                    <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}