import FilmRow from "./FilmRow";

export default function FilmList(props) {
    
    const allFilms = props.filmsToDisplay.map((film, idx) => {
        console.log(props.faves.includes(film))
        return <FilmRow 
        film={film} 
        key={`film${idx}`} 
        onFaveToggle={props.handleFaveToggle}
        isFave={props.faves.includes(film)}
        handleDetailsClick={props.handleDetailsClick}
        handleFave={props.handleFave}
        />
    })

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${props.filter === 'all' ? 'is-active' : ''}`} onClick={()=> props.handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${props.filter === 'faves' ? 'is-active' : ''}`} onClick={()=>{props.handleFilterClick("faves")}}>
                    FAVES
                    <span className="section-count">{props.faves.length}</span>
                </div>
            </div>
            <h2>{allFilms}</h2>
        </div>
    )
}