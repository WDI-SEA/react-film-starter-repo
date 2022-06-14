// import React, { Component } from 'react';
import { useState } from 'react'

// class Fave extends Component {

//     state = {
//         isFave: false 
//     }
    
//     handleClick = (e) => {
//         e.stopPropagation()
//         console.log('fave click')
//         this.setState((previousState) => {
//             return {
//                 isFave: !previousState.isFave
//             }
//         })
//     }

//     render() {
//         return (
//             <div className={`film-row-fave ${this.state.isFave === true ? 'remove_from_queue' : 'add_to_queue'}`} 
//                  onClick={this.handleClick}>
//                 <p className="material-icons">
//                     {`${this.state.isFave === true ? 'remove_from_queue' : 'add_to_queue'}`}
//                 </p>
//             </div>
//         )
//     }
// }

const Fave = (props) => {

    const [isFave, setFave] = useState({})

    const  handleClick = e => {
        props.onFaveToggle() 
    }
    
    return (
        <div onClick={(e) => { e.stopPropagation()
                handleClick()
            }} className={`film-row-fave ${props.isFave ? 'remove_from_queue' : 'add_to_queue'}`} >
                
            <p className="material-icons">{props.isFave ? 'remove_from_queue' : 'add_to_queue'}</p>
        </div>
    )
}

export default Fave