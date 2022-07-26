import React, { Component } from 'react'

export default class Fave extends Component {
    state = {
        isFave: false
    }

    handleClick = (e) => {
        console.log("handling Fave click!")
        e.stopPropagation()
        this.setState({ isFave: !this.state.isFave })
    }

  render() {
    let favoriteImg = this.state.isFave ? 'remove_from_queue' : 'add_to_queue'
    return (
        <>
            <div className={`film-row-fave ${favoriteImg}`} onClick={this.handleClick}>
                <p className="material-icons">add_to_queue</p>
            </div>
        </>
    )
  }
}
