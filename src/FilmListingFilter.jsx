export default function FilmListingFilter(props) {
    return (
        <div className='film-list-filters'>
        <div
            className={`film-list-filter${props.filter === 'all' ? ' is-active' : ''}`}
            onClick={() => props.handleFilterClick('all')}
        >
            ALL
            <span className='section-count'>{props.films.length}</span>
        </div>

        <div
            className={`film-list-filter${props.filter === 'faves' ? ' is-active' : ''}`}
            onClick={() => props.handleFilterClick('faves')}
        >
            FAVES
            <span className='section-count'>{props.faves.length}</span>
        </div>
    </div>
    )
}