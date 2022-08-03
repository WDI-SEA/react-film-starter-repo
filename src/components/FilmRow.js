import React, {Component} from 'react'
import Poster from './Poster'
import Fave from './Fave'

export default class FilmRow extends Component {
     
     handleDetailsClick = () => {
          console.log("Title: ", this.props.film.title)
     }

     render() {
          return (
               <div className="film-row">
                    <Poster src={"https://image.tmdb.org/t/p/w780"+ this.props.film.poster_path} alt={this.props.film.title} />
                    <div className="film-summary" onClick={this.handleDetailsClick}>
                         <h1>{this.props.film.title}</h1>
                         <p>{this.props.film.release_date}</p>
                    </div>
                    <Fave />
               </div>
          )
     }
}