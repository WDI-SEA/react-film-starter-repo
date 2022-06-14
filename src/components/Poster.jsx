// import React, { Component } from 'react';

// class Poster extends Component {
//     render () {
//         const url = `the movie poster for ${this.props.title}`
//         return (
//             <div>
//                 <img src={this.props.url} alt={url} />
//             </div>
//         )
//     }
// }

const Poster = (props) => {
    
    const url = `the movie poster for ${props.title}`

    return (
        <img src={props.url} alt={url} />
    )

}

export default Poster