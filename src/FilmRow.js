import React, { Component } from 'react'
import './App.css'

import FilmPoster from './FilmPoster'

class FilmRow extends Component {
    render() {
        // console.log(this.props, "film film")
        let posterUrl = <FilmPoster image={this.props.film.poster_path}/>
        let movieTitle = <h1>{this.props.film.title}</h1>

        // getting the year
        let extractedDate = this.props.film.release_date
        let newDate = new Date(extractedDate)
        let movieYear = <p>{newDate.getFullYear()}</p>

        return (
            <>
                <div className="film-row">
                    {posterUrl}
                    <div className="film-summary">
                        {movieTitle}
                        {movieYear}
                    </div>
                </div>

            </>
        )
    }
}

export default FilmRow