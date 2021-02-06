import React from 'react';
import FilmRow from './FilmRow'

class FilmListing extends React.Component {

    state = {
        filter: 'all'
    }

    handleFilterClick = filter => {
        console.log(`Setting filter to ${filter}`);
        this.setState({
            filter : filter
        })
    };
    render() {
        
        const allFilms = this.props.films.map(film => {
            return (
                <FilmRow film={film} key={film.id}/>
            )
        })

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className="film-list-filter" onClick={() => this.handleFilterClick('all')}>
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div className="film-list-filter" onClick={() => this.handleFilterClick('faves')}>
                        Faves
                        <span className="section-count">0</span>
                    </div>
                </div>
                {allFilms}
            </div>
        )
    }
};

export default FilmListing;