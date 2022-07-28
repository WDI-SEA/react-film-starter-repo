import React, { Component } from 'react';
import Poster from './Poster'
import Fave from './Fave';

class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log('Fetching details for', this.props.film.title )
    }
    
    render() {
        const date = new Date(this.props.film.release_date).getFullYear()
        return (
            <div className="film-row" onClick={this.handleDetailsClick}>
                
                <Poster film={this.props.film}/>

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