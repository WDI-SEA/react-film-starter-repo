import React, { Component } from 'react';
import Poster from './Poster';
import Fave from './Fave';


class FilmRows extends Component {
    
    handleDetailsClick = (film) =>{
        console.log(this.props.film)
    }
    
    render() { 
        let imagePath = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        return (
        <div 
        className="film-row"
        onClick={this.handleDetailsClick}
        >
             
            <Poster url={imagePath} alt={`movie poster for ${this.props.film.title}`}/>
           

            <div className="film-summary">
                <Fave />    
                <h1>{this.props.film.title}</h1>
                <p>{this.props.film.release_date.substring(0,4)}</p>
            </div>


        </div>

            
        )
    }
}
 
export default FilmRows;