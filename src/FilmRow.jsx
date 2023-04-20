import React, { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'

export default class FilmRow extends Component{

    handleDetailsClick = film => {
        console.log(`fetching details for ${film.title}`)
    }

    render() {

        const {film} = this.props
        console.log(film)

        return(
            <div 
                className="film-row" 
                onClick={() => this.handleDetailsClick(this.props.film)}
            >
                
                <Poster url={film.poster_path}/>

                <div className="film-summary">
                    <Fave />
                    <h1>{film.title}</h1>
                    <p>{film.release_date.split('-')[0]}</p>
                </div>
            </div>
        )
    }
}