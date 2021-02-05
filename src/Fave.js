import React, {Component} from 'react'

class Fave extends Component{
    // constructor(){
    //     // This binding is necessary to make `this` work in the callback
    //     this.handleClick = this.handleClick.bind(this)
    // }
    state={
        isFave:false,
        className :'add_to_queue'
    }
    handleClick=(e)=>{
        e.stopPropagation()
        console.log("I'm clicking")
       this.setState({isFave: !this.state.isFave})
       if(this.state.className=="add_to_queue"){
           this.setState({className:"remove_from_queue"})
        }else{
           this.setState({className:"add_to_queue"})

       }
    }
    render(){
        return(
            <div className={`film-row-fave ${this.state.className}`} onClick={this.handleClick}>
                <p className="material-icons">{this.state.className}</p>
            </div>
        )
    }
}

export default Fave