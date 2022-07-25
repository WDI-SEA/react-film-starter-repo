import React, { Component } from "react";
import FilmRow from './FilmRow';

class FilmList extends Component {
  render() {
    const allFilms = this.props.films.map((movie, i) => {
        return (
            <FilmRow key={i} film={movie}/>
        )
    })
    return (
      <>
        
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <h1>{allFilms}</h1>
          </div>
       
      </>
    );
  }
}

export default FilmList;
