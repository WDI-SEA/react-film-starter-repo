function Poster (props) {
    return (  
        <img src={props.poster} alt={props.alt} />
    )
}

export default Poster ;

// import React, { Component } from 'react';

// class Poster extends Component {
//     render() { 
//         return (
//             <img src={this.props.poster} alt={this.props.alt} />
//         );
//     }
// }
 
// export default Poster;