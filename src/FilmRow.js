import React, {Component} from 'react'
import Poster from './Poster'

class FilmRow extends Component{
    render(){
        const date = new Date (this.props.film.release_date).getFullYear()
        // const releaseDate = date.getFullYear()

        const url = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`

        return (
            <div className="film-row">  
        
                <Poster 
                url={url}
                alt={this.props.title}
                />
                
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{date}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow