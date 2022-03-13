import React, { useState } from 'react';
import './App.css';

function Fave(props) {

  const handleClick = (e) => {
    console.log(e)
    e.stopPropagation();
    console.log('Handling Fave click!');

    // Add this line. You'll call the function passed through props
    props.onFaveToggle();

    // Delete the `setIsFaves` line. You no longer track state here
    // setIsFave(!isFave)
  };

  return (
    <div
      onClick={handleClick}
      className={`film-row-fave ${props.isFave === false ? 'remove_from_queue' : 'add_to_queue'}`}
    >
      <p className="material-icons">add_to_queue</p>
    </div>
  );
}

export default Fave;

// class Fave extends Component {
//   state = {
//       isFave: false
//   };

//   handleClick=(e)=>{

//     this.setState((prevState, props)=>{

//         return {isFave: !prevState.isFave}
//     })

//   }

//   render() {
//     return (
//       <div onClick={this.handleClick} className={`film-row-fave ${this.state.isFave === false ? 'remove_from_queue' : 'add_to_queue'}`}>
//         <p className="material-icons">add_to_queue</p>
//       </div>
//     );
//   }
// }

// className={`film-list-filter ${this.state.filter === "all" ? 'is-active' : ''}`}

// export default Fave;
