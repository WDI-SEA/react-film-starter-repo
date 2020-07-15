import React, { Component } from 'react';

class Fave extends Component {

    constructor() {
        super()

        this.state = {
            isFave: false
        }
    }

    handleClick = (e) => {
        console.log("handing Fave Click!")
        e.stopPropagation()
        this.setState({
            isFave: !this.state.isFave
        })
    }
    
    render() {
        let toggle = this.state.isFave ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div className={"film-row-fave " + toggle} onClick={this.handleClick} >
                <p className="material-icons">{toggle}</p>
            </div>
        );
    }
}

export default Fave;