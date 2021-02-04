import React, { Component } from 'react'
import FilmPoster from './FilmPoster'

class FilmRow extends Component {
  constructor(props) {
    super() 
  }
  
  render () {
    const allPosters = this.props.films.poster_path.map((FilmRow, i) => {
      <FilmPoster films={this.props.films.poster_path} key={`filmPoster-${i}`} />
    })
    // let path  =`https://image.tmdb.org/t/p/w780${this.props.films[i].poster_path}`
        return (
          <div className="film-row">
            <img src={allPosters} alt="test" />
          <div className="film-summary">
              <h1>{}</h1>
              <p>{}</p>
            </div>
          </div>
        )
    }
}

export default FilmRow