import React, { Component } from "react";
import Poster from "./Poster"
import Fave from "./Fave";

export default class FilmRow extends Component {
    render() {
        const { film } = this.props;
        return(
            <div className="film-row">
                <Poster poster={film.poster_path} title={film.title}/>
                <div className="film-summary">
                    <h1>{film.title}</h1>
                    <p>{film.release_date.split('-')[0]}</p>
                </div>
                <Fave/>
            </div>
        )
    }
}