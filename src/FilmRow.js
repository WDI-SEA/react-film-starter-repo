import React , { Component } from 'react'

class FilmRow extends Component {
    render() {  
        const thisTitle = this.props.film.title
        const releaseYear = this.props.film.release_date.substring(0,4)
        const posterUrl = 'https://image.tmdb.org/t/p/w780/'+this.props.film.poster_path
        return (
            <div className="film-row">
            <img src={posterUrl} alt="" />

            <div className="film-summary">
                <h1>{thisTitle}</h1>
                <p>{releaseYear}</p>
            </div>
            </div>
        );
    }
  }
  
  export default FilmRow;