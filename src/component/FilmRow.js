import React, {Component} from "react";
import Poster from "./Poster";
import Fave from "./Fave";

export default class FilmRow extends Component{

    handleDetailsClicked = (film)=>{
        console.log('fetching details for', this.props.film.title)
    }

    render(){
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        const year = new Date(this.props.film.release_date)
        return(
            <div className="film-row" onClick={this.handleDetailsClicked}>
            <Poster url={posterUrl} title={this.props.film.title}/>

            <div className="film-summary">
                <h1>{this.props.film.title}</h1>
                <p>{year.getFullYear()}</p>
            </div>
            <Fave />
            </div>
        )
    }
}