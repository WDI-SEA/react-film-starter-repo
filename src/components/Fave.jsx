// import React, { useState } from 'react'

const Fave = ({onFaveToggle, isFave}) => {
    // const [isFave, setIsFave] = useState(false)
    
    const clickBtnHandler = (e) => {
        e.stopPropagation()

        onFaveToggle()

        // setIsFave({
        //     isFave: isFave ? true : false
        // })
        
    }

    return(
        <div name="film1" onClick={clickBtnHandler} className={`film-row-fave ${isFave ? 'remove_from_queue' : 'add_to_queue'}`}> 
            <p 
                className="material-icons"
            > add_to_queue 
            </p>
        </div>        
    )
}


// class Fave extends Component {
//     state = {
//         isFave: false
//     }
//     clickBtnHandler = (e) => {
//         e.stopPropagation()
//         console.log("handling Fave click")
//         this.setState({
//             isFave: this.state.isFave ? false : true
        
//         }, () => console.log(this.state.isFave))
//     }
//     render() { 
//         return (
//             <div name="film1" onClick={this.clickBtnHandler} className={`film-row-fave ${this.state.isFave ? 'remove_from_queue' : 'add_to_queue'}`}>
//                 <p 
//                     className="material-icons"
//                 > add_to_queue 
//                 </p>
//             </div>
//         );
//     }
// }
export default Fave;