// import React, { Component } from 'react'
import { useState } from 'react'


const Fav = (props) => {
const [isFave, setFave] = useState({})

const  handleClick = e => {
    
    props.onFaveToggle()
    
}
return (
    <div
        onClick={(e) => {
            e.stopPropagation()
            handleClick()
        }}
        className={`film-row-fave ${props.isFave ? 'remove_from_queue' : 'add_to_queue'}`}
    >
        <p className="material-icons">{props.isFave ? 'remove_from_queue' : 'add_to_queue'}</p>
    </div>
)
}
export default Fav





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
