// import React, { Component } from 'react';
// import React, { useState } from 'react';


// class Fave extends Component {
//     state = {
//         isFave: false
//     }

//     handleClick = (e) => {
//         e.stopPropagation()
//         console.log('handling Fave click!')
//         this.setState((prevState)=> {
//             return {
//                 isFave: !prevState.isFave
//             }
//         })
//     }
    
//     render() { 
//         const action = this.state.isFave?'remove_from_queue':'add_to_queue'
//         return (
//             <>                                                                                     
//                 <div onClick={this.handleClick} className={`film-row-fave ${this.state.isFave ? 'remove_from_queue' : 'add_to_queue' }`}>
//                     <p className="material-icons">{action}</p>
//                 </div>
//             </>
//         )
//     }
// }
 
// export default Fave;




// Functional Component

export default function Fave({ onFaveToggle, isFave }) {

    // const [fave, setFave] = useState({
    //     isFave: false
    // })

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('handling Fave click!')
        // add this line. you'll call the function passed through props
        onFaveToggle()
        // delete the setFaves line. you no longer track state here
        // setFave({ isFave: !fave.isFave })
    }

    const action = isFave?'remove_from_queue':'add_to_queue'

    return (
        <>
            <div onClick={handleClick} className={`film-row-fave ${action}`}>
            <p className="material-icons">{action}</p>
            </div>
        </>
    )
}