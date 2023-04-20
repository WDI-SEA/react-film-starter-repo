import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmList extends Component {
    render(){
        const filmRows = this.props.films.map((film, i) => (
            <FilmRow key={i} film={film}/>
        ));
         return( 
            <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            {filmRows}
            </div>
            )
    }
}