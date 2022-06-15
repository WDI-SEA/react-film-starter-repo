// import React, { Component } from 'react'
import {useState} from "react"

export default function Fav({film,onFaveToggle, isFave}) {
    // console.log("fav props", props)

    const handleClick = (e) => {
        // e.stopPropagation()
        console.log('Handling Fave click!')
      
        // Add this line. You'll call the function passed through props
        onFaveToggle(film)
      
        // Delete the `setIsFaves` line. You no longer track state here
        // setIsFave(!isFave)
    }

    return (
        <>
            <div
                onClick={(e) => {
                    handleClick()
                }}
                className={`film-row-fave ${isFave ? 'remove_from_queue' : 'add_to_queue'}`}
            >
                <p className="material-icons">{isFave ? 'remove_from_queue' : 'add_to_queue'}</p>
            </div>

        </>
    )
}


// export default class Fav extends Component {
//     state = {
//         isFave: false
//     }

//     handleClick = () => {
//         this.setState((previousState) => {
//             return { isFave: previousState.isFave ? false : true }
//         })
//     }

//     render() {
//         return (
//             <div
//                 onClick={(e) => {
//                     e.stopPropagation()
//                     this.handleClick()
//                 }}
//                 className={`film-row-fave ${this.state.isFave ? 'remove_from_queue' : 'add_to_queue'}`}
//             >
//                 <p className="material-icons">{this.state.isFave ? 'remove_from_queue' : 'add_to_queue'}</p>
//             </div>
//         )
//     }
// }

