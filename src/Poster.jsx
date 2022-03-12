
export default function Poster({imgUrl, alt}) {
    return(
        <>
        <img src={imgUrl} alt={alt} />
        </> 
    )
}

// export default class Poster extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <>
//             <img src={this.props.imgUrl} alt={this.props.alt} />
//             </>
//         );
//     }
// }