// import {useState} from 'react'

export default function Fave(props){
    // const [isFave, setFave] = useState(false)

    const handleClick = e => {
        e.stopPropagation()
        console.log('handling fave click')
        props.onFaveToggle()
    }

    let icon = props.isFave ? 'remove_from_queue' : 'add_to_queue'

    return (
        <div 
        className={`film-row-fave ${props.isFave === true ? 'remove_from_queue' : 'add_to_queue'}`}
        
        onClick={handleClick}
        
        >
            <p className="material-icons">{icon}</p>
        </div>
    )
}

// export default class Fave extends Component {
//     state = {
//         isFave: false
//     }
    
//     handleClick = e => {
//         e.stopPropagation()
//         console.log('handling fave click')
//         this.setState((prevState)=>{ return {isFave: !prevState.isFave} })
        
//     }
    
//     render() {
//     return (
//         <div 
//         className={`film-row-fave ${this.state.isFave === true ? 'remove_from_queue' : 'add_to_queue'}`}
        
//         onClick={this.handleClick}
        
//         >
//             <p className="material-icons">add_to_queue</p>
//         </div>
//     )
//   }
// }
