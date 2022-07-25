import React, { Component } from 'react'
import FilmRow from './FilmRow'

class FilmList extends Component {
    render () {
        const allFilms = this.props.films.map((film, index) => {
            return (
                // <div className='film-row'>
                //     <h2>{film.title}</h2>
                // </div>
                <FilmRow film={film}/>
            )
        })
        return (
            <>
            <div className="film-library">
             <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {/* {<h2>{this.props.fils[0].title}</h2>} */}
                {allFilms}
            </div>
            </div>
            </>
        )
    }
}

export default FilmList