import React, { Component } from 'react'
import FilmRow from './FilmRow'
import Fave from './Fave'

export default class FilmList extends Component {
  state = {
    filter: 'all'
  }

  handleDetailsClick = (film) => {
    console.log(`details for ${film.title}`)
  }

  handleFilterClick = (filter) => {
    console.log(`Setting filter to ${filter}`)
    this.setState({filter})
  }
  render() {
    let allFilms = this.props.films.map((film, idx) => {
        let source = "https://image.tmdb.org/t/p/w780" + film.poster_path
        return (<div className="film-row" key={idx} onClick={() => this.handleDetailsClick(film)}> 
                  <img src={source} alt={film.title}/> 
                  <div className='film-summary'> 
                    <Fave />
                    <h1 key={idx}>{film.title}</h1> 
                    <p>{film.release_date}</p> 
                  </div> 
                </div>)
                
    })
    return (
      <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
              ALL
              <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
              FAVES
              <span className="section-count">0</span>
          </div>
      </div>
  
      {allFilms}
  </div>
    )
  }
}
