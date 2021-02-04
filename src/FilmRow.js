import React, { Component } from 'react'
import './App.css'

import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film}`)
    }
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
                <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film.title)}>
                    {posterUrl}
                    <div className="film-summary">
                        {movieTitle}
                        {movieYear}
                    </div>
                    <Fave />
                </div>

            </>
        )
    }
}

export default FilmRow