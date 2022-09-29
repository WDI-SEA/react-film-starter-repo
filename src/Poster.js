// export default function Poster (props) {
//         return (
//             <img src={`https://image.tmdb.org/t/p/w780/${props.poster_path}`} alt={`${props.title}'s movie poster`} />
//         )
// }

export default function Poster(props) {
    return (
        <img 
            src={`https://image.tmdb.org/t/p/w780/${props.poster_path}`} 
            alt={`${props.title}'s movie poster`} 
        />
    )
}