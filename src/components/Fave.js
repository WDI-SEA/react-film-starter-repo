const Fave = ({ onFaveToggle, isFave }) => {

    const handleClick = e => {
        console.log("handling fave click")
        e.stopPropagation()
        onFaveToggle()
    }
    const action = isFave ? 'remove_from_queue' : 'add_to_queue'

    return (
        <div onClick={handleClick} className={`film-row-fave ${action}`}>
            <p className='material-icons'>{action}</p>
        </div>
    )
}

export default Fave;

// import React, { Component } from 'react';


// class Fave extends Component {
//     state = {
//         isFave: false
//     }
//     handleClick = e => {
//         console.log("handling fave click")
//         e.stopPropagation()
//         this.setState((prevState) => {
//             return {
//                 isFave: !prevState.isFave
//             }
//         })
//     }

//     render() {
//         const { isFave } = this.state

//         const action = isFave ? 'remove_from_queue' : 'add_to_queue'

//         return (
//             <div onClick={this.handleClick} className={`film-row-fave ${action}`}>
//                 <p className='material-icons'>{action}</p>
//             </div>
//         ) 
//     }
// }

// export default Fave;
