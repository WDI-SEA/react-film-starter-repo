export default function Poster (props) {
        const posterUrl = props.poster
        const title = props.title
        return(
            <img src={`https://image.tmdb.org/t/p/w780/${posterUrl}`} alt={`Poster for ${title}`}/>
        )
}