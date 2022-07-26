import React, { Component } from 'react'

export default class Fave extends Component {
     render() {
          const handleClick = e => {console.log("handling Fave click!")}
          return (
               <div className="film-row-fave add_to_queue" onClick={handleClick}>
                    <p className="material-icons">add_to_queue</p>
               </div>
          )
     }
}