import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import Fave from './Fave';
import Poster from './Poster';
import './App.css';

class FilmRow extends Component {
  state = {};

    handleDetailsClick=(film)=>{

        console.log(`fetching details for ${film}`)
    }


  render() {
    return (
      <div onClick={()=>{this.handleDetailsClick(this.props.WholeFilm.title)}} className="film-row">
        <div>
          <Poster
            url={
              'https://image.tmdb.org/t/p/w780/' +
              this.props.WholeFilm.poster_path
            }
          />
        </div>
        <div className="film-summary">
          <h1>{this.props.WholeFilm.title}</h1>
          <h1 class="subtitle">
            {this.props.WholeFilm.release_date.split('-')[0]}
          </h1>
        </div>
        <Fave />
      </div>
    );
  }
}

export default FilmRow;
