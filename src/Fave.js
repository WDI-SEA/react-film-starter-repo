import React, { Component } from 'react'

class Fave extends Component {
    state = {
        isFave: false
    }
    // constructor(props){
    //     super(props)
    //     this.handleClick = this.handleClick.bind(this)
    // }
    handleClick = (e) => {
        e.stopPropagation()
        this.setState({isFave: !this.state.isFave})
        console.log('handling fave click!')
    }


    render() {
        return(
            <div className="film-row-fave add_to_queue">
                <p onClick={this.handleClick}className="material-icons">add_to_queue</p>
            </div>
        )
    }
}

export default Fave