

export default function Poster(props) {

        return (
            <img src={`https://image.tmdb.org/t/p/w780/${props.URL}`} alt={props.title} />
        )
    }
