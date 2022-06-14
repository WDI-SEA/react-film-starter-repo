// import React, { Component } from 'react'




// export default class Fave extends Component {
//     handleClick = (e) => {
//         console.log('handling')
//     }
//     render() {
//         return (
//             <div className="film-row-fave add_to_queue"
//             onClick={this.handleClick}
//             >
//             <p className="material-icons">add_to_queue</p>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react';

function Fave () {

const [icon, setIcon] = usestate()





  handleClick = (e) => {
    e.stopPropagation()
    console.log("handling fave click!");
    props.onFaveToggle()
	}


    let icon = props.isFave ? 'remove_from_queue' : 'add_to_queue'

    return (
      <div className={`film-row-fave ${icon}`} onClick={handleClick}>
        <p className="material-icons">{icon}</p>
      </div>
    );
  }


export default Fave;
