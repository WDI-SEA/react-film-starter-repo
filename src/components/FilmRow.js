import React, { Component } from 'react'
import Poster from './Poster'

class FilmRow extends Component {
    render() {
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.posterUrl}`
        const year = this.props.year.substring(0, 4)
        return(
            <div className='film-row'>
                <Poster posterUrl={posterUrl} alt={this.props.title}/>
                <div className='film-summary'>
                    <h1>{this.props.title}</h1>
                    <p>{year}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow