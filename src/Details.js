export default function Details(props) {
    const film = props.film;

    const filmInfo = (
        <div className="film-detail is-hydrated">
            <figure className="film-backdrop App-logo">
                <img
                    src={`https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`}
                    alt={`Screenshot from the film ${props.film.title}`}
                />
                <h1 className="film-title App-logo">{props.film.title}</h1>
            </figure>
            <div className="film-meta App-logo">
                <h2 className="film-tagline">{props.film.tagline}</h2>
                <p className="film-detail-overview">
                    <img
                        src={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`}
                        className="film-detail-poster App-logo"
                        alt={props.film.title}
                    />
                    {props.film.overview}
                </p>
            </div>
        </div>
    );

    let details = props.film.id ? filmInfo : emptyInfo;

    const emptyInfo = (
        <div className="film-detail">
            <p>
                <i className="material-icons">subscriptions</i>
                <span>No film selected</span>
            </p>
        </div>
    );
    return (
        <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            {details}
        </div>
    );
}
