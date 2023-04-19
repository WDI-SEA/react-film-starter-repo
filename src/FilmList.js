import React, {Component} from "react";
import FilmRow from './FilmRow'

class FilmList extends Component {
    state = {
        filter: ''
    }

    handleFilterClick = (filter) => {
        console.log(`a filter was clicked ${filter}`)
        this.setState({ filter })
    }

    render() {
        const allFilms = this.props.films.map((film, i) => {
            return <FilmRow film={this.props.films[i]} />
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
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>
                {allFilms}
            </div>
        )
    }
}

export default FilmList
