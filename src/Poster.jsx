// import React, { Component } from 'react'

// export default class Poster extends Component {
//     render() {
//         return (
//             <img src={this.props.url} alt={`Poster for: ${this.props.title}`} />
//         )
//     }
// }


export default function Poster ({url, title}){
    return(
        <>
        <img src={url} alt={`Poster for: ${title}`} />
        </>
    )
}