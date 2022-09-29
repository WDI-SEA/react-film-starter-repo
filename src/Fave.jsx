// import React, { Component } from 'react'
import { useState } from 'react'

export default function Fave(props) {

    const [isFave, setIsFave] = useState(false)

    const handleClick = (e) => {
        e.stopPropagation()
        console.log("handling Fave click!")
        setIsFave(!isFave)
    }    

    return (
        <div className={`film-row-fave ${isFave ? 'remove_from_queue' : 'add_to_queue'} `} onClick={handleClick}>
            <p className="material-icons">add_to_queue</p>
        </div>          
    )
}





// export default class Fave extends Component {

//     state = {
//         isFave: false
//     }

    // handleClick = (e) => {
    //     e.stopPropagation()
    //     console.log("handling Fave click!")
    //     this.setState(prevState => {
    //         return {
    //             isFave: !prevState.isFave
    //         }
    //     })
    // }

//     render() {
//         return (
//             <div className={`film-row-fave ${this.state.isFave ? 'remove_from_queue' : 'add_to_queue'} `} onClick={this.handleClick}>
//                 <p className="material-icons">add_to_queue</p>
//             </div>  
//         )
//     }
// }