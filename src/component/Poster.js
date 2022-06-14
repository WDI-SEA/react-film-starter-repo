

export default function Poster(props) {
    const url = `the movie poster for ${props.title}`
    return(
        <div>
            <img src={props.url} alt={url} />
        </div>
    )
}