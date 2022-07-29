import React, { Component } from 'react'

export default class Fave extends Component {
     render() {
          const handleClick = e => {console.log("handling Fave click!")} //e.stopPropagation() // Says I need this to only see one message. I already am. PUt maybe i missed soemthing so I will keep this here so I can easlly add it.
          return (
               <div className="film-row-fave add_to_queue" onClick={handleClick}>
                    <p className="material-icons">add_to_queue</p>
               </div>
          )
     }
}