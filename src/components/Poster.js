
export default function Poster(props){
  return (
    <img src={props.posterSrc} alt={`Poster for the film ${props.altTag}`}/>
  )
}

// export default class Poster extends Component {
//   render() {
//     return (
//       <img src={this.props.posterSrc} alt={`Poster for the film ${this.props.altTag}`}/>
//     )
//   }
// }
