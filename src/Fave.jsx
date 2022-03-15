import React, {useState, useEffect} from 'react'

// PART 3 --FUNCTION IT UP
// GOAL 2 MOVE THE FAVE EVENT HANDLER UP THE COMPONENT TREE
// Step 1: Remove the state setter in the Fave constructor
// Take the isFave state out of the Fave constructor.
// Step 2: Replace setState in handleFaveClick handler
// Since you're no longer holding the state in the Fave component, you no longer want to set the isFave state in the handleClick() event handler.
// Instead, assume that the parent component will pass a handler called onFaveToggle to you through the props object.
// Step 3: isFave  changed to be a prop rather than a state 
// Change handleClick as follows:

export default function Fave(props) {

   const [icon, setIcon] = useState('add_to_queue')

   useEffect(() => {
       setIcon(props.isFave ? 'remove_from_queue' : 'add_to_queue')
   }, [props.isFave])

const handleClick = e => {
    e.stopPropagation()
    console.log('Handling Fave click!')
  
    // Add this line. You'll call the function passed through props
    props.onFaveToggle()

  }
  return (
      <div 
      className={`film-row-fave ${icon}`} onClick={handleClick} >
        <p className="material-icons">{icon}</p>
      </div>  
  )
}


// import React, { Component } from 'react';
// import './App.css'

// class Fave extends Component {
//     state = {
//         isFave: false};

//     handleClick =(e)=> {
         
//     this.setState((prevState, props) => {
//         return {isFave: !prevState.isFave}
//     })
// }
//     render() { 
//         return (
//             <div onClick={this.handleClick} 
//             className={`film-row-fave ${this.state.isFave === false ? 'remove_from_queue': 'add_to_queue'}`}>
//             <p className= "material-icons">add_to_queue</p>
//             </div>
//         );
//     }
// }
 
// export default Fave;