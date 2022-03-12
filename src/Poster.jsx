// import { Component } from 'react'

// export default class Poster extends Component {
//     render() {
//         return (
//             <img src={this.props.url} alt={`film poster for the movie, ${this.props.title}`} />
//         )
//     }
// }

export default function Poster({url, title}) {
    return (
        <img src={url} alt={`film poster for the movie, ${title}`} />
    )
}