import React, { Component } from 'react';



class Fave extends Component {
constructor() {
    super()
    this.state = {
        isFave: false
    }
}


    handleClick = (e) => {
        e.stopPropagation()
        this.setState({ isFave: !this.state.isFave })     
    }
    render() {
        let icon = this.state.isFave ? "remove_from_queue" : "add_to_queue"

        return (
            
            <div onClick={this.handleClick} className={`film-row-fave ${icon}`}>
                <p className="material-icons">{icon}</p>
                
           
            </div>
        );
        
    }

}



export default Fave;