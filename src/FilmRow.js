import React, { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'


class FilmRow extends Component {

    handleDetailsClick = (film) =>{
        console.log('Fetching details for', this.props.film.title)
    }

    render () {
        const date = new Date (this.props.film.release_date).getFullYear()
        // const releaseDate = date.getFullYear()
        
        const url = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`

        return (
        <div className="film-row" onClick={this.handleDetailsClick}>

            {/* <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} alt="{this.props.film.title} poster image" /> */}

            <Poster
                url={url}
                alt={this.props.title}/>

            <div className="film-summary">
                <h1>{this.props.film.title}</h1>
                <p>{date}</p>
            </div>
                <Fave />
        </div>
        )
    }
}

export default FilmRow