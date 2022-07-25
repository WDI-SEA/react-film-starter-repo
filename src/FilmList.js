import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {
    render () {

        const allFilms = this.props.films.map((film, index) => {
            return ( 
                <FilmRow film= {film}
                         key = {index}
                />
                
                // <div className="film-row">
                //     <h1>{film.title}</h1>  
                // </div>
    
            )
        })
        return (
            <>
                <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {/* <h1>{this.props.films[0].title}</h1> */}
                {allFilms}
                </div>
            </>
        )
    }
}

export default FilmList