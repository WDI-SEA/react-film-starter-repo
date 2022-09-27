import React, { Component } from "react";
import Poster from "./Poster";
import Fave from "./Fave";

export default class FilmRow extends Component {
    handleDetailsClick= (film)=>{
        console.log(`Fetching details for" ${this.props.film.title}`)
    }

    render (){
        const date = new Date(this.props.film.release_date)
        return(
            <div className="film-row" 
                onClick={()=> this.handleDetailsClick(this.props.film)}
                >
                <Poster
                    poster_path={this.props.film.poster_path}
                    title={this.props.film.title}
                />

                <div className="film-summary">
                    <Fave />
                        <h1 key ={this.props.key}> {this.props.film.title} </h1>
                        <p> {date.getFullYear()} </p>
                </div>
            </div> 
                
    
        )
    }
}