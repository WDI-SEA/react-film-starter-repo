import React, { Component } from "react"
import Poster from "./Poster"
import Fave from "./Fave"

class FilmRow extends Component {

    handleDetailsClick = (film) => {
        console.log("Fetching details for")
    }
    
    render() {
        return (
            <div className="film-row"
                onClick= {this.handleDetailsClick}
            >
                <Poster 
                    poster_path={this.props.film.poster_path}
                    title={this.props.film.title}
                />
               <div className = "film-summary">
                    <h1>{this.props.film.title}</h1>
                    {/* <p>{this.props.film.release_date.split("-")[0]}</p>
                    <p>{new Date(this.props.film.release_date).getFullYear()}</p> */}
                    <p>{this.props.film.release_date.substring(0,4)}</p>
               </div>
               <Fave 
               
               />
            </div>
           
        )
    }
}

export default FilmRow