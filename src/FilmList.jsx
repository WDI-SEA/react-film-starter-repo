import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmList extends Component {
  state = {
    filter: 'all',
  }

  render() {
    const allFilms = this.props.films.map((film, index) => {
      return <FilmRow film={film} key={`film-${index}`} />
    })

    const handleFilterClick = (filter) => {
      this.setState({
        filter: filter
      })
    }

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}
            onClick={() => handleFilterClick('faves')}
          >
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {allFilms}
      </div>
    )
  }
}
