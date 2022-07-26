import React , { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'

class FilmRow extends Component {

    handleDetailsClick = (e, film) => {
        e.preventDefault()
        console.log(`Fetching details for ${film}`)
    }

    render() {  
        const thisTitle = this.props.film.title
        const releaseYear = this.props.film.release_date.substring(0,4)
        const posterUrl = 'https://image.tmdb.org/t/p/w780/'+this.props.film.poster_path
        return (
            <div className="film-row"
                onClick={(e) => this.handleDetailsClick(e,thisTitle)}>
                    <Poster 
                        url={posterUrl}
                        alt={thisTitle}
                    />

                    <div className="film-summary">
                        <h1>{thisTitle}</h1>
                        <p>{releaseYear}</p>
                    </div>
                    <Fave 
                    
                    />
            </div>
        );
    }
  }
  
  export default FilmRow;