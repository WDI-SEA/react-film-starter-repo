import React, { useState } from "react";


function Fave({ onFaveToggle, isFave }) {

  const handleClick = (e) => {
    e.stopPropagation();
    console.log("handling Fave click!");
    onFaveToggle();
  };

  const action = isFave ? "remove_from_queue" : "add_to_queue";

  return (
    <>
      <div onClick={handleClick} className={`film-row-fave ${action}`}>
        <p className="material-icons">{action}</p>
      </div>
    </>
  );
}

export default Fave;

// import { Component } from "react/";

// class Fave extends Component {

//     state = {
//         isFave: false
//     }

//     handleClick = (e) => {
//         e.stopPropagation()
//         console.log('Clicked')
//         this.setState({
//             isFave: true
//         })
//     }

//   render() {
//     return (
//       <div className={`film-row-fave ${this.state.isFave ? "remove_from_queue" : "" }`} onClick={this.handleClick}>
//         <p className="material-icons">add_to_queue</p>
//       </div>
//     );
//   }
// }

// export default Fave;
