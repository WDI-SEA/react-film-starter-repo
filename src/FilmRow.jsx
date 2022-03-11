import React, { Component } from 'react';
import Poster from './Poster';
import Fave from './Fave';

class FilmRow extends Component {
    state = {  }

    handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film}`)
    }

    render() { 
        let imagePath = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        return (
            <div className="film-row">
                <Poster imgUrl={imagePath} alt={`Movie poster for ${this.props.film.title}`}/>
             
                <div onClick={()=>this.handleDetailsClick(this.props.film.title)} className="film-summary">
                    <Fave />
                    <h1>Title: {this.props.film.title}</h1>
                    <p>Year: {this.props.film.release_date.substring(0,4)}</p>
                </div>
            </div>
        );
    }
}
 
export default FilmRow;