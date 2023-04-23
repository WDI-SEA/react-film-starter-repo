export default function Poster(props) {

    const url = props.url
    const title = props.title
    return (
        <img src={`https://image.tmdb.org/t/p/w780/${url}`} alt={`Poster for ${title}`} />
    )
}
