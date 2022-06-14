// export default class Poster extends Component {
//     render() {
//         return (
//             <img src={this.props.url} alt={`Poster for: ${this.props.title}`} />
//         )
//     }
// }
export default function Poster(props) {
    return (
        <img src={props.url} alt={`Poster for: ${props.title}`} />
    )
}

