import React, { Component } from "react";
import FilmRow from './FilmRow'

class FilmList extends Component {
  state = {
    filter: ''
  }

  handleFilterClick = (filter) => {
    this.setState({ filter: filter })
  }

  render() {
    const { films, faves } = this.props;
    const allFilms = films.map((film, i) => {
      return <FilmRow film={films[i]} key={film.id} />
    })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">{faves ? faves.length : 0}</span>
          </div>
        </div>
        {allFilms}
      </div>
    )
  }
}

export default FilmList
