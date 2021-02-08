import React, { Component } from "react"

let addOrRemove = ''

class Fave extends Component {
    state = {
        isFave: false
    }
    changeQueue = () => {
        if(this.state.isFave === false) {
            addOrRemove = 'add_to_queue'
        } else {
            addOrRemove = 'remove_from_queue'
        }
        console.log(addOrRemove)
    }
    handleClick = (e) => {
        e.stopPropagation()
        this.setState({isFave: !this.state.isFave})
        this.changeQueue()
        console.log(this.state.isFave)
    }
    render() {
        return(
            <div className={`film-row-fave ${addOrRemove}`}>
                <p onClick={this.handleClick} className="material-icons">add_to_queue</p>
            </div>
        )
    }
}

export default Fave