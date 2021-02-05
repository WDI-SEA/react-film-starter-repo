import React, { Component } from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {

  handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`)
  }

  constructor(props) {
    super(props) 
  }

  
  render () {

        return (
          <div onClick={() => this.handleDetailsClick('film')}className="film-row">
            <FilmPoster film={this.props.film} />
            <div className="film-summary">
              <h1>{this.props.film.title}</h1>
              <p>{this.props.film.release_date.split('-').[0]}</p>
            </div>
            <h2><Fave /></h2>
          </div>
        )
    }
}

export default FilmRow