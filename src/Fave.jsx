import React, { Component } from 'react';


class Fave extends Component {
    constructor() {
        super()
        this.state = {
            isFave: false
        }
    }

    handleClick = (e) => {
        console.log('handling Fave click!')
        this.setState(isFave ? false : true)
    }
    render() {  
       let icon = this.state.isFave ? 'remove_from-queue' : 'add_to-queue'
        return (
            <div>
                <div className={`film-row-fave ${icon}`} onClick={this.handleClick}>
                    <p className="material-icons">{icon}</p>
                </div>

            </div>
        );
    }
}

export default Fave;