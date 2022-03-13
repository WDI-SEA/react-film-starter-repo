import React, { Component } from 'react'
import Fave from './Fave.jsx';

class FilmRow extends Component { 

    handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film}`)
    }
    render() { 
        let releaseYear= this.props.film.release_date.substr(0, this.props.film.release_date.indexOf("-"))
        return (
            <div onClick={() => {this.handleDetailsClick(this.props.film.title)}} className="film-row">
            <img 
                src={`https://image.tmdb.org/t/p/w780/` + this.props.posterUrl} 
                alt="" 
                />
          
            <div className="film-summary">
              <h1>{this.props.film.title}</h1>
              <p>{releaseYear}</p>
            </div>
            <Fave />
          </div>
        );
    }
}
 
export default FilmRow;