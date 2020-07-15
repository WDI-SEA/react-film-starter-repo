import React, { Component } from 'react';
import FilmRow from './FilmRow'

export default class FilmListing extends Component {

  handleFilterClick = (e, filter) => {
    console.log('setting filter to' + {filter})

  }

  render() {

    const allFilms = this.props.films.map((film, i) => {
      return (
       <FilmRow film={film} key={`filmRow-${i}`} />
      )  
    })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className="film-list-filter">
              ALL
              <span className="section-count">{this.props.films.length}</span>
          </div>
          <div onClick={() => this.handleFilterClick('faves')} className="film-list-filter">
              FAVES
              <span className="section-count">0</span>
          </div>
        </div>
        {allFilms}

      </div>
    
    );
  }
}

 