import React, { Component } from "react";
import FilmRow from './FilmRow'


class FilmListing extends Component {
    render () {
        const allFilms = this.props.films.map((film, i) => {
           return (<FilmRow film={film} key={`film-${i}`} />)
        }) 
        return (
        <div className='film-details'>
          <h1 className='section-title'>DETAILS</h1>
          {allFilms}
          
        </div> 
        )
    }
}

export default FilmListing