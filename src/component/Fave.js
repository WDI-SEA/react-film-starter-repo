
import { useState } from 'react'

// export default class Fave extends Component{
    
//     state = {
//         isFave: false
//     }

//     handleClick = (e) =>{

//         this.setState((prevState)=>{ 
//             return {
//                 isFave: !prevState.isFave
//             } 
//         })
//     }

//     render(){
//         return(

//         )
//     }
// }

export default function Fave(props) {
    // const [isFave, setFave] = useState(false)
    const handleClick = () => {
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