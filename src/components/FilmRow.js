import React, { Component } from "react";
import Fave from './Fave';
import Poster from './Poster';

class FilmRow extends Component {
    
  handleDetailsClick = (film) => {
  }
  
  render() {
        const posterURL = `https://image.tmdb.org/t/p/w780${this.props.film.poster_path}`
        const releaseYear = this.props.film.release_date
        
    return (
      <div 
        className="film-row"
        onClick={() => this.handleDetailsClick(this.props.film)}  
      >
        <Poster url={posterURL} film={this.props.film}/>
        

        <div className="film-summary">
          <Fave />
          <h1>{this.props.film.title}</h1>
          <p>{releaseYear}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;