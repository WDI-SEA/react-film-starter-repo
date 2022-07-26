import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmList extends Component {
  render() {
    let allFilms = this.props.films.map((film, idx) => {
        let source = "https://image.tmdb.org/t/p/w780" + film.poster_path
        return <div className="film-row" key={idx}> <img src={source} alt={film.title}/> <div className='film-summary'> <h1 key={idx}>{film.title}</h1> <p>{film.release_date}</p> </div> </div>
    })
    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            
                {allFilms}
            
        </div>
    )
  }
}
